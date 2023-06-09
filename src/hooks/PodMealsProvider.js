import React, { createContext, useContext, useEffect, useState } from "react";
import { useSolid } from "./SolidProvider";
import {
  addDislikedMeal,
  addLikedMeal,
  getDislikedMeals,
  getLikedMeals,
  undoDislike,
  undoLike,
} from "../api/functions/solid";

const PodMealsContext = createContext();
const PodMealsUpdateContext = createContext();

export function usePodMeals() {
  return useContext(PodMealsContext);
}

export function usePodMealsUpdate() {
  return useContext(PodMealsUpdateContext);
}

export function PodMealsProvider({ children }) {
  const [likedMeals, setLikedMeals] = useState([]);
  const [dislikedMeals, setDislikedMeals] = useState([]);
  const [loadingMeals, setLoadingMeals] = useState(false);
  const [errorOcurred, setErrorOcurred] = useState(null);

  const { webId } = useSolid();

  useEffect(() => {
    if (webId) {
      setLoadingMeals(true);
      getLikedMeals()
        .then((mealsArr) => {
          setLikedMeals(mealsArr);
        })
        .catch((error) => {
          setErrorOcurred("Ocorreu um erro ao resgatar pratos curtidos.");
          console.error(error);
        })
        .finally(() => {
          getDislikedMeals()
            .then((dislikedMealsArr) => {
              setDislikedMeals(dislikedMealsArr);
            })
            .catch((err) => {
              setErrorOcurred(
                "Ocorreu um erro ao resgatar pratos não curtidos."
              );
              console.error(err);
            })
            .finally(() => {
              setLoadingMeals(false);
            });
        });
    }
  }, [webId]);

  async function addLiked(meal) {
    try {
      await addLikedMeal(meal);

      const newLikedMeals = await getLikedMeals();

      setLikedMeals(newLikedMeals);
    } catch (error) {
      setErrorOcurred("Ocorreu um erro ao curtir refeição.");

      console.error(error);
    }
  }

  async function addDisliked(meal) {
    try {
      await addDislikedMeal(meal);

      const newDislikedMeals = await getDislikedMeals();

      setDislikedMeals(newDislikedMeals);
    } catch (error) {
      setErrorOcurred("Ocorreu um erro ao descurtir refeição.");

      console.error(error);
    }
  }

  async function undoDisliked(meal) {
    try {
      await undoDislike(meal);

      const newDislikedMeals = await getDislikedMeals();

      setDislikedMeals(newDislikedMeals);
    } catch (error) {
      setErrorOcurred("Ocorreu um erro ao desfazer descurtir.");

      console.error(error);
    }
  }

  async function undoLiked(meal) {
    try {
      await undoLike(meal);

      const newLikedMeals = await getLikedMeals();

      setLikedMeals(newLikedMeals);
    } catch (error) {
      setErrorOcurred("Ocorreu um erro ao desfazer curtir.");

      console.error(error);
    }
  }

  return (
    <PodMealsContext.Provider
      value={{
        likedMeals,
        dislikedMeals,
        loadingMeals: loadingMeals,
        error: errorOcurred,
      }}
    >
      <PodMealsUpdateContext.Provider
        value={{ addLiked, addDisliked, undoLiked, undoDisliked }}
      >
        {children}
      </PodMealsUpdateContext.Provider>
    </PodMealsContext.Provider>
  );
}
