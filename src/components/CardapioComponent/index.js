/* eslint eqeqeq: "off" */
import React, { useEffect, useState } from "react";
import Display from "./Display";
import { useMeals } from "../../hooks/MealsProvider";
import { useCardapio } from "../../hooks/CardapioProvider";

export default function CardapioComponent() {
  const { meals } = useMeals();
  const { cardapioExecutivo, cardapioRefeitorio } = useCardapio();

  const [selectedRestaurant, setSelectedRestaurant] = useState(-1);

  const [segundaCafe, setSegundaCafe] = useState("Prato não informado");
  const [segundaAlmoco, setSegundaAlmoco] = useState("Prato não informado");
  const [segundaJanta, setSegundaJanta] = useState("Prato não informado");

  const [tercaCafe, setTercaCafe] = useState("Prato não informado");
  const [tercaAlmoco, setTercaAlmoco] = useState("Prato não informado");
  const [tercaJanta, setTercaJanta] = useState("Prato não informado");

  const [quartaCafe, setQuartaCafe] = useState("Prato não informado");
  const [quartaAlmoco, setQuartaAlmoco] = useState("Prato não informado");
  const [quartaJanta, setQuartaJanta] = useState("Prato não informado");

  const [quintaCafe, setQuintaCafe] = useState("Prato não informado");
  const [quintaAlmoco, setQuintaAlmoco] = useState("Prato não informado");
  const [quintaJanta, setQuintaJanta] = useState("Prato não informado");

  const [sextaCafe, setSextaCafe] = useState("Prato não informado");
  const [sextaAlmoco, setSextaAlmoco] = useState("Prato não informado");
  const [sextaJanta, setSextaJanta] = useState("Prato não informado");

  const [sabadoCafe, setSabadoCafe] = useState("Prato não informado");
  const [sabadoAlmoco, setSabadoAlmoco] = useState("Prato não informado");
  const [sabadoJanta, setSabadoJanta] = useState("Prato não informado");

  const [domingoCafe, setDomingoCafe] = useState("Prato não informado");
  const [domingoAlmoco, setDomingoAlmoco] = useState("Prato não informado");
  const [domingoJanta, setDomingoJanta] = useState("Prato não informado");

  const [updatedAt, setUpdatedAt] = useState("");
  const [selectedRestaurantText, setSelectedRestaurantText] = useState("");

  const restaurantOptions = [
    { value: 0, text: "REFEITÓRIO", default: false },
    { value: 1, text: "EXECUTIVO", default: false },
  ];

  // altera o titulo baseado no restaurante selecionado
  useEffect(() => {
    if (selectedRestaurant == 0) {
      setSelectedRestaurantText("Cardápio Refeitório");
    } else {
      if (selectedRestaurant == 1) {
        setSelectedRestaurantText("Cardápio Executivo");
      } else {
        setSelectedRestaurantText("Selecione um cardápio...");
      }
    }
  }, [selectedRestaurant]);

  // setta os nomes dos pratos corretos de acordo a mudança do restaurante
  useEffect(() => {
    if (selectedRestaurant == 0) {
      meals.forEach((m) => {
        if (cardapioRefeitorio.segunda_cafe == m.id) {
          setSegundaCafe(m.nome);
        }

        if (cardapioRefeitorio.segunda_almoco == m.id) {
          setSegundaAlmoco(m.nome);
        }

        if (cardapioRefeitorio.segunda_janta == m.id) {
          setSegundaJanta(m.nome);
        }

        if (cardapioRefeitorio.terca_cafe == m.id) {
          setTercaCafe(m.nome);
        }

        if (cardapioRefeitorio.terca_almoco == m.id) {
          setTercaAlmoco(m.nome);
        }

        if (cardapioRefeitorio.terca_janta == m.id) {
          setTercaJanta(m.nome);
        }

        if (cardapioRefeitorio.quarta_cafe == m.id) {
          setQuartaCafe(m.nome);
        }

        if (cardapioRefeitorio.quarta_almoco == m.id) {
          setQuartaAlmoco(m.nome);
        }

        if (cardapioRefeitorio.quarta_janta == m.id) {
          setQuartaJanta(m.nome);
        }

        if (cardapioRefeitorio.quinta_cafe == m.id) {
          setQuintaCafe(m.nome);
        }

        if (cardapioRefeitorio.quinta_almoco == m.id) {
          setQuintaAlmoco(m.nome);
        }

        if (cardapioRefeitorio.quinta_janta == m.id) {
          setQuintaJanta(m.nome);
        }

        if (cardapioRefeitorio.sexta_cafe == m.id) {
          setSextaCafe(m.nome);
        }

        if (cardapioRefeitorio.sexta_almoco == m.id) {
          setSextaAlmoco(m.nome);
        }

        if (cardapioRefeitorio.sexta_janta == m.id) {
          setSextaJanta(m.nome);
        }

        if (cardapioRefeitorio.sabado_cafe == m.id) {
          setSabadoCafe(m.nome);
        }

        if (cardapioRefeitorio.sabado_almoco == m.id) {
          setSabadoAlmoco(m.nome);
        }

        if (cardapioRefeitorio.sabado_janta == m.id) {
          setSabadoJanta(m.nome);
        }

        if (cardapioRefeitorio.domingo_cafe == m.id) {
          setDomingoCafe(m.nome);
        }

        if (cardapioRefeitorio.domingo_almoco == m.id) {
          setDomingoAlmoco(m.nome);
        }

        if (cardapioRefeitorio.domingo_janta == m.id) {
          setDomingoJanta(m.nome);
        }
      });
      setUpdatedAt(
        new Date(cardapioRefeitorio.updated_at).toLocaleString("en-GB")
      );
    }
    if (selectedRestaurant == 1) {
      meals.forEach((m) => {
        if (cardapioExecutivo.segunda_cafe == m.id) {
          setSegundaCafe(m.nome);
        }

        if (cardapioExecutivo.segunda_almoco == m.id) {
          setSegundaAlmoco(m.nome);
        }

        if (cardapioExecutivo.segunda_janta == m.id) {
          setSegundaJanta(m.nome);
        }

        if (cardapioExecutivo.terca_cafe == m.id) {
          setTercaCafe(m.nome);
        }

        if (cardapioExecutivo.terca_almoco == m.id) {
          setTercaAlmoco(m.nome);
        }

        if (cardapioExecutivo.terca_janta == m.id) {
          setTercaJanta(m.nome);
        }

        if (cardapioExecutivo.quarta_cafe == m.id) {
          setQuartaCafe(m.nome);
        }

        if (cardapioExecutivo.quarta_almoco == m.id) {
          setQuartaAlmoco(m.nome);
        }

        if (cardapioExecutivo.quarta_janta == m.id) {
          setQuartaJanta(m.nome);
        }

        if (cardapioExecutivo.quinta_cafe == m.id) {
          setQuintaCafe(m.nome);
        }

        if (cardapioExecutivo.quinta_almoco == m.id) {
          setQuintaAlmoco(m.nome);
        }

        if (cardapioExecutivo.quinta_janta == m.id) {
          setQuintaJanta(m.nome);
        }

        if (cardapioExecutivo.sexta_cafe == m.id) {
          setSextaCafe(m.nome);
        }

        if (cardapioExecutivo.sexta_almoco == m.id) {
          setSextaAlmoco(m.nome);
        }

        if (cardapioExecutivo.sexta_janta == m.id) {
          setSextaJanta(m.nome);
        }

        if (cardapioExecutivo.sabado_cafe == m.id) {
          setSabadoCafe(m.nome);
        }

        if (cardapioExecutivo.sabado_almoco == m.id) {
          setSabadoAlmoco(m.nome);
        }

        if (cardapioExecutivo.sabado_janta == m.id) {
          setSabadoJanta(m.nome);
        }

        if (cardapioExecutivo.domingo_cafe == m.id) {
          setDomingoCafe(m.nome);
        }

        if (cardapioExecutivo.domingo_almoco == m.id) {
          setDomingoAlmoco(m.nome);
        }

        if (cardapioExecutivo.domingo_janta == m.id) {
          setDomingoJanta(m.nome);
        }
      });
      setUpdatedAt(
        new Date(cardapioExecutivo.updated_at).toLocaleString("en-GB")
      );
    }
  }, [cardapioExecutivo, cardapioRefeitorio, selectedRestaurant, meals]);

  return (
    <Display
      updatedAt={updatedAt}
      selectedRestaurant={selectedRestaurant}
      setSelectedRestaurant={setSelectedRestaurant}
      restaurantOptions={restaurantOptions}
      segundaCafe={segundaCafe}
      segundaAlmoco={segundaAlmoco}
      segundaJanta={segundaJanta}
      tercaCafe={tercaCafe}
      tercaAlmoco={tercaAlmoco}
      tercaJanta={tercaJanta}
      quartaCafe={quartaCafe}
      quartaAlmoco={quartaAlmoco}
      quartaJanta={quartaJanta}
      quintaCafe={quintaCafe}
      quintaAlmoco={quintaAlmoco}
      quintaJanta={quintaJanta}
      sextaCafe={sextaCafe}
      sextaAlmoco={sextaAlmoco}
      sextaJanta={sextaJanta}
      sabadoCafe={sabadoCafe}
      sabadoAlmoco={sabadoAlmoco}
      sabadoJanta={sabadoJanta}
      domingoCafe={domingoCafe}
      domingoAlmoco={domingoAlmoco}
      domingoJanta={domingoJanta}
      selectedRestaurantText={selectedRestaurantText}
    />
  );
}
