import React, { useState } from "react";
import Display from "./Display";

export default function CardapioForm({ meals }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(-1);
  const restaurantOptions = [
    { value: 0, text: "REFEITÓRIO", default: false },
    { value: 1, text: "EXECUTIVO", default: false },
  ];
  return (
    <Display
      meals={meals}
      selectedRestaurant={selectedRestaurant}
      setSelectedRestaurant={setSelectedRestaurant}
      restaurantOptions={restaurantOptions}
    />
  );
}
