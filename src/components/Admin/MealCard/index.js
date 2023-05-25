import React, { useState } from "react";
import Display from "./Display";

export default function MealCard({ meal }) {
  const [toggled, setToggled] = useState(false);

  return <Display meal={meal} toggled={toggled} setToggled={setToggled} />;
}
