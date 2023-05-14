import { db } from "../database-test-config";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const MEALS_PATH = "meals";
const mealsCollection = collection(db, MEALS_PATH);

// retorna lista de todas as refeições cadastradas
export const getAllMeals = async () => {
  const meals = [];

  await getDocs(mealsCollection)
    .then((res) => {
      res.docs.map((doc) => {
        return meals.push(doc.data());
      });
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });

  return meals;
};

// retorna uma refeição específica
export const getMeal = async (id) => {
  let meal = undefined;

  await getDoc(doc(db, MEALS_PATH, id))
    .then((res) => {
      meal = res.data();
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });

  return meal;
};

// cadastra uma nova refeição
export const createMeal = async (newMeal) => {
  let createdMealId = undefined;

  await addDoc(mealsCollection, newMeal)
    .then((res) => {
      createdMealId = res.id;
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });

  return createdMealId;
};

// atualiza uma refeição
export const updateMeal = async (id, updateMeal) => {
  let updatedMeal = undefined;

  await updateDoc(doc(db, MEALS_PATH, id), updateMeal)
    .then(async () => {
      updatedMeal = await getMeal(id);
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });

  return updatedMeal;
};

// deleta uma refeição
export const deleteMeal = async (id) => {
  await deleteDoc(doc(db, MEALS_PATH, id))
    .then(() => {
      console.log(`Deleted ${id}`);
      return `Deleted ${id}`;
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });
};
