import { db } from "../database-test-config";
import { collection, getDocs } from "firebase/firestore";

// retorna lista de todas as refeições cadastradas
export const getMeals = async () => {
  const meals = [];
  await getDocs(collection(db, "meals")).then((res) => {
    res.docs.map((doc) => {
      return meals.push(doc.data());
    });
  });
  return meals;
};
