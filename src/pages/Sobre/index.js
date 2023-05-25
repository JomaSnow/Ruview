import React, { useCallback, useEffect, useState } from "react";
import Display from "./Display";
import { getAllMeals } from "../../api/functions/meals";

export default function SobrePage() {
  const [meals, setMeals] = useState([]);

  const getAllMealsCallback = useCallback(async () => {
    const meals = await getAllMeals();
    setMeals(meals);
  }, []);

  useEffect(() => {
    getAllMealsCallback().catch(console.error());
  }, [getAllMealsCallback]);

  return <Display meals={meals} />;
}
