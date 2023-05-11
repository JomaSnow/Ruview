import React, { useCallback, useEffect, useState } from "react";
import Display from "./Display";
import { getMeals } from "../../api/functions/getMeals";

export default function HomePage() {
  const [meals, setMeals] = useState([]);

  const getMealsCallback = useCallback(async () => {
    const meals = await getMeals();
    setMeals(meals);
  }, []);

  useEffect(() => {
    getMealsCallback().catch(console.error);
  }, [getMealsCallback]);

  console.log(meals);

  return <Display />;
}
