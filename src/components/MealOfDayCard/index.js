import React, { useEffect, useState } from "react";
import Display from "./Display";
import { usePodMeals, usePodMealsUpdate } from "../../hooks/PodMealsProvider";

export default function MealOfDayCard({ meal, type = "cafe" }) {
  const [typeText, setTypeText] = useState("");
  const [attributesText, setAttributesText] = useState("");
  const [loading, setLoading] = useState(true);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  const { likedMeals, dislikedMeals, loadingMeals } = usePodMeals();
  const { addLiked, addDisliked, undoLiked, undoDisliked } =
    usePodMealsUpdate();

  useEffect(() => {
    if (!loadingMeals) {
      setLoading(false);
    }
  }, [loadingMeals]);

  useEffect(() => {
    if (likedMeals.some((m) => m.id === meal.id)) {
      setHasLiked(true);
    } else {
      setHasLiked(false);
    }
  }, [likedMeals, meal]);

  useEffect(() => {
    if (dislikedMeals.some((m) => m.id === meal.id)) {
      setHasDisliked(true);
    } else {
      setHasDisliked(false);
    }
  }, [dislikedMeals, meal]);

  useEffect(() => {
    switch (type) {
      case "cafe":
        setTypeText("Café da manhã (07:00 às 09:30)");
        break;
      case "almoco":
        setTypeText("Almoço (11:00 às 14:30)");
        break;
      case "janta":
        setTypeText("Janta (17:00 às 19:30)");
        break;

      default:
        break;
    }
  }, [type]);

  useEffect(() => {
    try {
      if (meal) {
        if (
          !meal.leite &&
          !meal.cogumelo &&
          !meal.mel &&
          !meal.oleaginosas &&
          !meal.ovos &&
          !meal.pimenta &&
          !meal.soja &&
          !meal.suino &&
          !meal.trigo
        ) {
          setAttributesText("Nenhum atributo.");
        } else {
          if (meal.leite) {
            setAttributesText((a) => a + " Leite");
          }
          if (meal.cogumelo) {
            setAttributesText((a) => a + " Cogumelo");
          }
          if (meal.mel) {
            setAttributesText((a) => a + " Mel");
          }
          if (meal.oleaginosas) {
            setAttributesText((a) => a + " Oleaginosas");
          }
          if (meal.ovos) {
            setAttributesText((a) => a + " Ovos");
          }
          if (meal.pimenta) {
            setAttributesText((a) => a + " Pimenta");
          }
          if (meal.soja) {
            setAttributesText((a) => a + " Soja");
          }
          if (meal.suino) {
            setAttributesText((a) => a + " Suíno");
          }
          if (meal.trigo) {
            setAttributesText((a) => a + " Trigo");
          }
        }
      }
    } catch (e) {
      console.log(
        "Ocorreu um erro ao carregar os cards, possivelmente renderizou o componente antes de meal estar definido."
      );
      console.log(e);
    }
    return () => {
      setAttributesText("");
    };
  }, [meal]);

  async function handleLikeMeal() {
    setLoading(true);
    await addLiked(meal);
    setLoading(false);
  }

  async function handleUndoLike() {
    setLoading(true);
    await undoLiked(meal);
    setLoading(false);
  }

  async function handleDislikeMeal() {
    setLoading(true);
    await addDisliked(meal);
    setLoading(false);
  }

  async function handleUndoDislike() {
    setLoading(true);
    undoDisliked(meal);
    setLoading(false);
  }

  return !meal ? null : (
    <Display
      meal={meal}
      type={typeText}
      attributes={attributesText}
      handleLikeMeal={handleLikeMeal}
      handleDislikeMeal={handleDislikeMeal}
      handleUndoLike={handleUndoLike}
      handleUndoDislike={handleUndoDislike}
      loading={loading}
      hasLiked={hasLiked}
      hasDisliked={hasDisliked}
    />
  );
}
