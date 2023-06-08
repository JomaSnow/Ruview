import { db, storage } from "../database-test-config";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const MEALS_PATH = "meals";
const mealsCollection = collection(db, MEALS_PATH);

// retorna lista de todas as refeições cadastradas
export const getAllMeals = async () => {
  const meals = [];

  await getDocs(mealsCollection)
    .then((res) => {
      res.docs.map(async (doc) => {
        let meal = doc.data();
        // let image = undefined;
        // await getDownloadURL(ref(storage, MEALS_PATH + `/${doc.id}`))
        //   .then((result) => {
        //     image = result;
        //   })
        //   .catch((err) => {
        //     console.error(err.code);
        //   });

        // meal = { ...meal, id: doc.id, image };
        meal = { ...meal, id: doc.id };
        return meals.push(meal);
      });
    })
    .catch((e) => {
      console.error(e.code);
      throw new Error(`Ocorreu um erro. (${e.code})`);
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
export const createMeal = async (newMeal, image) => {
  let createdMealId = undefined;

  await addDoc(mealsCollection, newMeal)
    .then(async (res) => {
      createdMealId = res.id;
      console.log(createdMealId);
      await uploadBytes(
        ref(storage, MEALS_PATH + `/${createdMealId}`),
        image
      ).catch((e) => {
        console.error(e.code);
        return `Ocorreu um erro no upload de imagem. (${e.code})`;
      });
    })
    .catch((e) => {
      console.error(e.code);
      return `Ocorreu um erro. (${e.code})`;
    });

  return true;
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
