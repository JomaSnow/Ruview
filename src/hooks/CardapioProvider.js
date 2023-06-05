import React, { createContext, useContext, useEffect, useState } from "react";
import { getExecutivo, getRefeitorio } from "../api/functions/cardapio";

const CardapioContext = createContext();

export function useCardapio() {
  return useContext(CardapioContext);
}

export function CardapioProvider({ children }) {
  const [cardapioRefeitorio, setCardapioRefeitorio] = useState();
  const [cardapioExecutivo, setCardapioExecutivo] = useState();
  const [loadingCardapio, setLoadingCardapio] = useState(true);
  const [errorOcurred, setErrorOcurred] = useState(null);

  useEffect(() => {
    setLoadingCardapio(true);
    getRefeitorio()
      .then((response) => {
        setCardapioRefeitorio(response);
        getExecutivo()
          .then((res) => {
            setCardapioExecutivo(res);
            setLoadingCardapio(false);
          })
          .catch((err) => {
            setErrorOcurred(err.message);
            console.error(err);
            setLoadingCardapio(false);
          });
      })
      .catch((error) => {
        setErrorOcurred(error.message);
        console.error(error);
        setLoadingCardapio(false);
      });
  }, []);

  return (
    <CardapioContext.Provider
      value={{
        cardapioRefeitorio,
        cardapioExecutivo,
        loading: loadingCardapio,
        error: errorOcurred,
      }}
    >
      {children}
    </CardapioContext.Provider>
  );
}
