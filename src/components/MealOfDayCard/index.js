import React, { useEffect, useState } from "react";
import Display from "./Display";

export default function MealOfDayCard({ meal, type = "cafe" }) {
  const [typeText, setTypeText] = useState("");
  const [attributesText, setAttributesText] = useState("");

  useEffect(() => {
    switch (type) {
      case "cafe":
        setTypeText("Café da manhã (6am-10am)");
        break;
      case "almoco":
        setTypeText("Almoço (11am-3pm)");
        break;
      case "janta":
        setTypeText("Janta (6pm-10pm)");
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

  return !meal ? null : (
    <Display meal={meal} type={typeText} attributes={attributesText} />
  );
}
