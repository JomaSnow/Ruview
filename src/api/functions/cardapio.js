/* eslint eqeqeq: "off" */
import { db } from "../database-test-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const CARDAPIO_PATH = "calendario";

// retorna o cardapio refeitório
export const getRefeitorio = async () => {
  let cardapio = undefined;

  await getDoc(doc(db, CARDAPIO_PATH, "0"))
    .then((res) => {
      cardapio = res.data();
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });

  return cardapio;
};

// retorna o cardapio executivo
export const getExecutivo = async () => {
  let cardapio = undefined;

  await getDoc(doc(db, CARDAPIO_PATH, "1"))
    .then((res) => {
      cardapio = res.data();
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });

  return cardapio;
};

// atualiza o cardapio
export const updateCardapio = async (tipo, updatedCardapioData) => {
  let updatedCardapio = undefined;

  await updateDoc(doc(db, CARDAPIO_PATH, tipo), updatedCardapioData)
    .then(async () => {
      if (tipo == 0) {
        updatedCardapio = await getRefeitorio();
      } else {
        updatedCardapio = await getExecutivo();
      }
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });

  return updatedCardapio;
};
