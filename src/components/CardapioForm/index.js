import React, { useEffect, useState } from "react";
import Display from "./Display";
import {
  getExecutivo,
  getRefeitorio,
  updateCardapio,
} from "../../api/functions/cardapio";

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

  const [updatedAt, setUpdatedAt] = useState("");

  const [loading, setLoading] = useState(false);
  const [cardapioRefeitorio, setCardapioRefeitorio] = useState({
    domingo_cafe: -1,
    domingo_almoco: -1,
    domingo_janta: -1,
    segunda_cafe: -1,
    segunda_almoco: -1,
    segunda_janta: -1,
    terca_cafe: -1,
    terca_almoco: -1,
    terca_janta: -1,
    quarta_cafe: -1,
    quarta_almoco: -1,
    quarta_janta: -1,
    quinta_cafe: -1,
    quinta_almoco: -1,
    quinta_janta: -1,
    sexta_cafe: -1,
    sexta_almoco: -1,
    sexta_janta: -1,
    sabado_cafe: -1,
    sabado_almoco: -1,
    sabado_janta: -1,
    updated_at: 0,
  });
  const [cardapioExecutivo, setCardapioExecutivo] = useState({
    domingo_cafe: -1,
    domingo_almoco: -1,
    domingo_janta: -1,
    segunda_cafe: -1,
    segunda_almoco: -1,
    segunda_janta: -1,
    terca_cafe: -1,
    terca_almoco: -1,
    terca_janta: -1,
    quarta_cafe: -1,
    quarta_almoco: -1,
    quarta_janta: -1,
    quinta_cafe: -1,
    quinta_almoco: -1,
    quinta_janta: -1,
    sexta_cafe: -1,
    sexta_almoco: -1,
    sexta_janta: -1,
    sabado_cafe: -1,
    sabado_almoco: -1,
    sabado_janta: -1,
    updated_at: 0,
  });

  const restaurantOptions = [
    { value: 0, text: "REFEITÓRIO", default: false },
    { value: 1, text: "EXECUTIVO", default: false },
  ];

  const handleUpdate = async () => {
    setLoading(true);

    await updateCardapio(selectedRestaurant, {
      domingo_cafe: domingoCafe,
      domingo_almoco: domingoAlmoco,
      domingo_janta: domingoJanta,
      segunda_cafe: segundaCafe,
      segunda_almoco: segundaAlmoco,
      segunda_janta: segundaJanta,
      terca_cafe: tercaCafe,
      terca_almoco: tercaAlmoco,
      terca_janta: tercaJanta,
      quarta_cafe: quartaCafe,
      quarta_almoco: quartaAlmoco,
      quarta_janta: quartaJanta,
      quinta_cafe: quintaCafe,
      quinta_almoco: quintaAlmoco,
      quinta_janta: quintaJanta,
      sexta_cafe: sextaCafe,
      sexta_almoco: sextaAlmoco,
      sexta_janta: sextaJanta,
      sabado_cafe: sabadoCafe,
      sabado_almoco: sabadoAlmoco,
      sabado_janta: sabadoJanta,
      updated_at: Date.now(),
    })
      .then((res) => {
        if (selectedRestaurant == 0) {
          setCardapioRefeitorio(res);
        }
        if (selectedRestaurant == 1) {
          setCardapioExecutivo(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    setLoading(false);
  };

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
  useEffect(() => {
    async function fetchCardapio() {
      await getRefeitorio()
        .then(async (res) => {
          setCardapioRefeitorio(res);
          await getExecutivo()
            .then((r) => {
              setCardapioExecutivo(r);
            })
            .catch((e) => {
              console.error(e);
            });
        })
        .catch((er) => {
          console.error(er);
        });
    }
    fetchCardapio();
  }, []);

  // setta os selects corretos de acordo a mudança do restaurante
  useEffect(() => {
    if (selectedRestaurant == 0) {
      setSegundaCafe(cardapioRefeitorio.segunda_cafe);
      setSegundaAlmoco(cardapioRefeitorio.segunda_almoco);
      setSegundaJanta(cardapioRefeitorio.segunda_janta);
      setTercaCafe(cardapioRefeitorio.terca_cafe);
      setTercaAlmoco(cardapioRefeitorio.terca_almoco);
      setTercaJanta(cardapioRefeitorio.terca_janta);
      setQuartaCafe(cardapioRefeitorio.quarta_cafe);
      setQuartaAlmoco(cardapioRefeitorio.quarta_almoco);
      setQuartaJanta(cardapioRefeitorio.quarta_janta);
      setQuintaCafe(cardapioRefeitorio.quinta_cafe);
      setQuintaAlmoco(cardapioRefeitorio.quinta_almoco);
      setQuintaJanta(cardapioRefeitorio.quinta_janta);
      setSextaCafe(cardapioRefeitorio.sexta_cafe);
      setSextaAlmoco(cardapioRefeitorio.sexta_almoco);
      setSextaJanta(cardapioRefeitorio.sexta_janta);
      setSabadoCafe(cardapioRefeitorio.sabado_cafe);
      setSabadoAlmoco(cardapioRefeitorio.sabado_almoco);
      setSabadoJanta(cardapioRefeitorio.sabado_janta);
      setDomingoCafe(cardapioRefeitorio.domingo_cafe);
      setDomingoAlmoco(cardapioRefeitorio.domingo_almoco);
      setDomingoJanta(cardapioRefeitorio.domingo_janta);
      setUpdatedAt(new Date(cardapioRefeitorio.updated_at).toString());
    }
    if (selectedRestaurant == 1) {
      setSegundaCafe(cardapioExecutivo.segunda_cafe);
      setSegundaAlmoco(cardapioExecutivo.segunda_almoco);
      setSegundaJanta(cardapioExecutivo.segunda_janta);
      setTercaCafe(cardapioExecutivo.terca_cafe);
      setTercaAlmoco(cardapioExecutivo.terca_almoco);
      setTercaJanta(cardapioExecutivo.terca_janta);
      setQuartaCafe(cardapioExecutivo.quarta_cafe);
      setQuartaAlmoco(cardapioExecutivo.quarta_almoco);
      setQuartaJanta(cardapioExecutivo.quarta_janta);
      setQuintaCafe(cardapioExecutivo.quinta_cafe);
      setQuintaAlmoco(cardapioExecutivo.quinta_almoco);
      setQuintaJanta(cardapioExecutivo.quinta_janta);
      setSextaCafe(cardapioExecutivo.sexta_cafe);
      setSextaAlmoco(cardapioExecutivo.sexta_almoco);
      setSextaJanta(cardapioExecutivo.sexta_janta);
      setSabadoCafe(cardapioExecutivo.sabado_cafe);
      setSabadoAlmoco(cardapioExecutivo.sabado_almoco);
      setSabadoJanta(cardapioExecutivo.sabado_janta);
      setDomingoCafe(cardapioExecutivo.domingo_cafe);
      setDomingoAlmoco(cardapioExecutivo.domingo_almoco);
      setDomingoJanta(cardapioExecutivo.domingo_janta);
      setUpdatedAt(new Date(cardapioExecutivo.updated_at).toString());
    }
  }, [cardapioExecutivo, cardapioRefeitorio, selectedRestaurant]);

  return (
    <Display
      updatedAt={updatedAt}
      loading={loading}
      handleUpdate={handleUpdate}
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
