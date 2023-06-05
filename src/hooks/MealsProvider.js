import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllMeals } from "../api/functions/meals";

const MealsContext = createContext();
const MealsUpdateContext = createContext();

export function useMeals() {
  return useContext(MealsContext);
}

export function useMealsUpdate() {
  return useContext(MealsUpdateContext);
}

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState();
  const [loadingMeals, setLoadingMeals] = useState(true);
  const [errorOcurred, setErrorOcurred] = useState(null);

  useEffect(() => {
    setLoadingMeals(true);
    getAllMeals()
      .then((response) => {
        setMeals(response);
      })
      .catch((err) => {
        setErrorOcurred(err.message);
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => {
        setLoadingMeals(false);
        }, 500); // esse timeout ta aqui pq senão os objetos não carregam.
        // a impressão é que a função de getAllMeals demora pra buscar as imagens
        // mas fala que tá pronto pro async antes disso, logo retornando objetos desatualizados
        // (vazios já que a primeira leitura deles é vazia). De fato, se modifica
        // a getAllMeals para não buscar imagens, o async funciona adequadamente.
        // Coloquei timeout de 500ms pq parece que funciona, mas isso não pode
        // ser a solução adequada
      });
  }, []);

  return (
    <MealsContext.Provider
      value={{ meals, loading: loadingMeals, error: errorOcurred }}
    >
      <MealsUpdateContext.Provider value={{ setMeals, setLoadingMeals }}>
        {children}
      </MealsUpdateContext.Provider>
    </MealsContext.Provider>
  );
}
