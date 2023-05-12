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

const mealsCollection = collection(db, "meals");

// retorna lista de todas as refeições cadastradas
export const getAllMeals = async () => {
  const meals = [];
  await getDocs(mealsCollection).then((res) => {
    res.docs.map((doc) => {
      return meals.push(doc.data());
    });
  });
  return meals;
};

// retorna uma refeição específica
export const getMeal = async (id) => {
  let meal = undefined;
  await getDoc(doc(db, "meals", id)).then((res) => {
    meal = res.data();
  });
  return meal;
};

// cadastra uma nova refeição
export const createMeal = async (newMeal) => {
  let createdMealId = undefined;
  await addDoc(mealsCollection, newMeal).then((res) => {
    createdMealId = res.id;
  });
  return createdMealId;
};

// atualiza uma refeição
export const updateMeal = async (id, updateMeal) => {
  let updatedMeal = undefined;
  await updateDoc(doc(db, "meals", id), updateMeal).then(async () => {
    updatedMeal = await getMeal(id);
  });
  return updatedMeal;
};

// deleta uma refeição
export const deleteMeal = async (id) => {
  await deleteDoc(doc(db, "meals", id)).then(() => {
    console.log(`Deleted ${id}`);
  });
};
