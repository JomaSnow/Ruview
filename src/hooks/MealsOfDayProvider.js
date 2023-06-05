import React, { createContext, useContext, useEffect, useState } from "react";

import { useCardapio } from "./CardapioProvider";
import { useMeals } from "./MealsProvider";

const MealsOfDayContext = createContext();

export function useMealsOfDay() {
  return useContext(MealsOfDayContext);
}

export function MealsOfDayProvider({ children }) {
  const [cafeRefeitorioMealId, setCafeRefeitorioMealId] = useState();
  const [almocoRefeitorioMealId, setAlmocoRefeitorioMealId] = useState();
  const [jantaRefeitorioMealId, setJantaRefeitorioMealId] = useState();
  const [cafeExecutivoMealId, setCafeExecutivoMealId] = useState();
  const [almocoExecutivoMealId, setAlmocoExecutivoMealId] = useState();
  const [jantaExecutivoMealId, setJantaExecutivoMealId] = useState();

  const [cafeRefeitorio, setCafeRefeitorio] = useState();
  const [almocoRefeitorio, setAlmocoRefeitorio] = useState();
  const [jantaRefeitorio, setJantaRefeitorio] = useState();
  const [cafeExecutivo, setCafeExecutivo] = useState();
  const [almocoExecutivo, setAlmocoExecutivo] = useState();
  const [jantaExecutivo, setJantaExecutivo] = useState();

  const cardapios = useCardapio();
  const meals = useMeals();

  // define os ids dos pratos do dia
  useEffect(() => {
    const dayOfWeek = new Date().getDay();

    if (!cardapios.loading) {
      switch (dayOfWeek) {
        case 0:
          setCafeRefeitorioMealId(cardapios.cardapioRefeitorio.domingo_cafe);
          setAlmocoRefeitorioMealId(
            cardapios.cardapioRefeitorio.domingo_almoco
          );
          setJantaRefeitorioMealId(cardapios.cardapioRefeitorio.domingo_janta);
          setCafeExecutivoMealId(cardapios.cardapioExecutivo.domingo_cafe);
          setAlmocoExecutivoMealId(cardapios.cardapioExecutivo.domingo_almoco);
          setJantaExecutivoMealId(cardapios.cardapioExecutivo.domingo_janta);
          break;

        case 1:
          setCafeRefeitorioMealId(cardapios.cardapioRefeitorio.segunda_cafe);
          setAlmocoRefeitorioMealId(
            cardapios.cardapioRefeitorio.segunda_almoco
          );
          setJantaRefeitorioMealId(cardapios.cardapioRefeitorio.segunda_janta);
          setCafeExecutivoMealId(cardapios.cardapioExecutivo.segunda_cafe);
          setAlmocoExecutivoMealId(cardapios.cardapioExecutivo.segunda_almoco);
          setJantaExecutivoMealId(cardapios.cardapioExecutivo.segunda_janta);
          break;

        case 2:
          setCafeRefeitorioMealId(cardapios.cardapioRefeitorio.terca_cafe);
          setAlmocoRefeitorioMealId(cardapios.cardapioRefeitorio.terca_almoco);
          setJantaRefeitorioMealId(cardapios.cardapioRefeitorio.terca_janta);
          setCafeExecutivoMealId(cardapios.cardapioExecutivo.terca_cafe);
          setAlmocoExecutivoMealId(cardapios.cardapioExecutivo.terca_almoco);
          setJantaExecutivoMealId(cardapios.cardapioExecutivo.terca_janta);
          break;

        case 3:
          setCafeRefeitorioMealId(cardapios.cardapioRefeitorio.quarta_cafe);
          setAlmocoRefeitorioMealId(cardapios.cardapioRefeitorio.quarta_almoco);
          setJantaRefeitorioMealId(cardapios.cardapioRefeitorio.quarta_janta);
          setCafeExecutivoMealId(cardapios.cardapioExecutivo.quarta_cafe);
          setAlmocoExecutivoMealId(cardapios.cardapioExecutivo.quarta_almoco);
          setJantaExecutivoMealId(cardapios.cardapioExecutivo.quarta_janta);
          break;

        case 4:
          setCafeRefeitorioMealId(cardapios.cardapioRefeitorio.quinta_cafe);
          setAlmocoRefeitorioMealId(cardapios.cardapioRefeitorio.quinta_almoco);
          setJantaRefeitorioMealId(cardapios.cardapioRefeitorio.quinta_janta);
          setCafeExecutivoMealId(cardapios.cardapioExecutivo.quinta_cafe);
          setAlmocoExecutivoMealId(cardapios.cardapioExecutivo.quinta_almoco);
          setJantaExecutivoMealId(cardapios.cardapioExecutivo.quinta_janta);
          break;

        case 5:
          setCafeRefeitorioMealId(cardapios.cardapioRefeitorio.sexta_cafe);
          setAlmocoRefeitorioMealId(cardapios.cardapioRefeitorio.sexta_almoco);
          setJantaRefeitorioMealId(cardapios.cardapioRefeitorio.sexta_janta);
          setCafeExecutivoMealId(cardapios.cardapioExecutivo.sexta_cafe);
          setAlmocoExecutivoMealId(cardapios.cardapioExecutivo.sexta_almoco);
          setJantaExecutivoMealId(cardapios.cardapioExecutivo.sexta_janta);
          break;

        case 6:
          setCafeRefeitorioMealId(cardapios.cardapioRefeitorio.sabado_cafe);
          setAlmocoRefeitorioMealId(cardapios.cardapioRefeitorio.sabado_almoco);
          setJantaRefeitorioMealId(cardapios.cardapioRefeitorio.sabado_janta);
          setCafeExecutivoMealId(cardapios.cardapioExecutivo.sabado_cafe);
          setAlmocoExecutivoMealId(cardapios.cardapioExecutivo.sabado_almoco);
          setJantaExecutivoMealId(cardapios.cardapioExecutivo.sabado_janta);
          break;

        default:
          break;
      }
    }
  }, [cardapios]);

  // define os pratos
  useEffect(() => {
    if (!meals.loading && !cardapios.loading) {
      meals.meals.forEach((meal) => {
        switch (meal.id) {
          case cafeRefeitorioMealId:
            setCafeRefeitorio(meal);
            break;
          case almocoRefeitorioMealId:
            setAlmocoRefeitorio(meal);
            break;
          case jantaRefeitorioMealId:
            setJantaRefeitorio(meal);
            break;
          case cafeExecutivoMealId:
            setCafeExecutivo(meal);
            break;
          case almocoExecutivoMealId:
            setAlmocoExecutivo(meal);
            break;
          case jantaExecutivoMealId:
            setJantaExecutivo(meal);
            break;

          default:
            break;
        }
      });
    }
  }, [
    meals,
    cardapios,
    cafeExecutivoMealId,
    cafeRefeitorioMealId,
    almocoExecutivoMealId,
    almocoRefeitorioMealId,
    jantaExecutivoMealId,
    jantaRefeitorioMealId,
  ]);

  return (
    <MealsOfDayContext.Provider
      value={{
        cafeExecutivo,
        cafeRefeitorio,
        almocoExecutivo,
        almocoRefeitorio,
        jantaExecutivo,
        jantaRefeitorio,
      }}
    >
      {children}
    </MealsOfDayContext.Provider>
  );
}
