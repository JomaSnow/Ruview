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
        setLoadingMeals(false);
      })
      .catch((err) => {
        setErrorOcurred(err);
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
