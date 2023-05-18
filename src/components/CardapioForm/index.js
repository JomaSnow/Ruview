import React, { useEffect, useState } from "react";
import Display from "./Display";

export default function CardapioForm({ meals = [] }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(-1);

  const [segundaCafe, setSegundaCafe] = useState(-1);
  const [segundaAlmoco, setSegundaAlmoco] = useState(-1);
  const [segundaJanta, setSegundaJanta] = useState(-1);

  const [tercaCafe, setTercaCafe] = useState(-1);
  const [tercaAlmoco, setTercaAlmoco] = useState(-1);
  const [tercaJanta, setTercaJanta] = useState(-1);

  const [quartaCafe, setQuartaCafe] = useState(-1);
  const [quartaAlmoco, setQuartaAlmoco] = useState(-1);
  const [quartaJanta, setQuartaJanta] = useState(-1);

  const [quintaCafe, setQuintaCafe] = useState(-1);
  const [quintaAlmoco, setQuintaAlmoco] = useState(-1);
  const [quintaJanta, setQuintaJanta] = useState(-1);

  const [sextaCafe, setSextaCafe] = useState(-1);
  const [sextaAlmoco, setSextaAlmoco] = useState(-1);
  const [sextaJanta, setSextaJanta] = useState(-1);

  const [sabadoCafe, setSabadoCafe] = useState(-1);
  const [sabadoAlmoco, setSabadoAlmoco] = useState(-1);
  const [sabadoJanta, setSabadoJanta] = useState(-1);

  const [domingoCafe, setDomingoCafe] = useState(-1);
  const [domingoAlmoco, setDomingoAlmoco] = useState(-1);
  const [domingoJanta, setDomingoJanta] = useState(-1);

  const [cafeOptions, setCafeOptions] = useState([]);
  const [almocoOptions, setAlmocoOptions] = useState([]);
  const [jantaOptions, setJantaOptions] = useState([]);

  const restaurantOptions = [
    { value: 0, text: "REFEITÓRIO", default: false },
    { value: 1, text: "EXECUTIVO", default: false },
  ];

  // Define as opções do select de refeições
  useEffect(() => {
    try {
      if (selectedRestaurant == 0) {
        const mealsCafe = [];
        const mealsAlmoco = [];
        const mealsJanta = [];

        meals.forEach((m) => {
          if (m.restaurante == 0) {
            if (m.tipo_refeicao == 0) {
              mealsCafe.push({ value: m.id, text: m.nome, default: false });
            }
            if (m.tipo_refeicao == 1) {
              mealsAlmoco.push({ value: m.id, text: m.nome, default: false });
            }
            if (m.tipo_refeicao == 2) {
              mealsJanta.push({ value: m.id, text: m.nome, default: false });
            }
          }
        });

        setCafeOptions(mealsCafe);
        setAlmocoOptions(mealsAlmoco);
        setJantaOptions(mealsJanta);
      }
      if (selectedRestaurant == 1) {
        const mealsCafe = [];
        const mealsAlmoco = [];
        const mealsJanta = [];

        meals.forEach((m) => {
          if (m.restaurante == 1) {
            if (m.tipo_refeicao == 0) {
              mealsCafe.push({ value: m.id, text: m.nome, default: false });
            }
            if (m.tipo_refeicao == 1) {
              mealsAlmoco.push({ value: m.id, text: m.nome, default: false });
            }
            if (m.tipo_refeicao == 2) {
              mealsJanta.push({ value: m.id, text: m.nome, default: false });
            }
          }
        });

        setCafeOptions(mealsCafe);
        setAlmocoOptions(mealsAlmoco);
        setJantaOptions(mealsJanta);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals, selectedRestaurant]);

  // carrega calendario
  useEffect(() => {}, []);

  // setta os selects corretos de acordo a mudança do restaurante
  useEffect(() => {}, []);

  return (
    <Display
      selectedRestaurant={selectedRestaurant}
      setSelectedRestaurant={setSelectedRestaurant}
      restaurantOptions={restaurantOptions}
      cafeOptions={cafeOptions}
      almocoOptions={almocoOptions}
      jantaOptions={jantaOptions}
      segundaCafe={segundaCafe}
      setSegundaCafe={setSegundaCafe}
      segundaAlmoco={segundaAlmoco}
      setSegundaAlmoco={setSegundaAlmoco}
      segundaJanta={segundaJanta}
      setSegundaJanta={setSegundaJanta}
      tercaCafe={tercaCafe}
      setTercaCafe={setTercaCafe}
      tercaAlmoco={tercaAlmoco}
      setTercaAlmoco={setTercaAlmoco}
      tercaJanta={tercaJanta}
      setTercaJanta={setTercaJanta}
      quartaCafe={quartaCafe}
      setQuartaCafe={setQuartaCafe}
      quartaAlmoco={quartaAlmoco}
      setQuartaAlmoco={setQuartaAlmoco}
      quartaJanta={quartaJanta}
      setQuartaJanta={setQuartaJanta}
      quintaCafe={quintaCafe}
      setQuintaCafe={setQuintaCafe}
      quintaAlmoco={quintaAlmoco}
      setQuintaAlmoco={setQuintaAlmoco}
      quintaJanta={quintaJanta}
      setQuintaJanta={setQuintaJanta}
      sextaCafe={sextaCafe}
      setSextaCafe={setSextaCafe}
      sextaAlmoco={sextaAlmoco}
      setSextaAlmoco={setSextaAlmoco}
      sextaJanta={sextaJanta}
      setSextaJanta={setSextaJanta}
      sabadoCafe={sabadoCafe}
      setSabadoCafe={setSabadoCafe}
      sabadoAlmoco={sabadoAlmoco}
      setSabadoAlmoco={setSabadoAlmoco}
      sabadoJanta={sabadoJanta}
      setSabadoJanta={setSabadoJanta}
      domingoCafe={domingoCafe}
      setDomingoCafe={setDomingoCafe}
      domingoAlmoco={domingoAlmoco}
      setDomingoAlmoco={setDomingoAlmoco}
      domingoJanta={domingoJanta}
      setDomingoJanta={setDomingoJanta}
    />
  );
}
