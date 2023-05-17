import React, { useEffect, useState } from "react";
import Display from "./LoginForm";
import { ADMIN_SESSION_KEY, logIn, logOut } from "../../api/functions/auth";
import Dashboard from "./Dashboard";
import { createMeal } from "../../api/functions/meals";
import { getAllMeals } from "../../api/functions/meals";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [mealErrorMessage, setMealErrorMessage] = useState("");
  const [mealName, setMealName] = useState("");
  const [mealType, setMealType] = useState(-1);
  const [mealRestaurant, setMealRestaurant] = useState(-1);
  const [leite, setLeite] = useState(false);
  const [cogumelo, setCogumelo] = useState(false);
  const [mel, setMel] = useState(false);
  const [oleaginosas, setOleaginosas] = useState(false);
  const [ovos, setOvos] = useState(false);
  const [pimenta, setPimenta] = useState(false);
  const [soja, setSoja] = useState(false);
  const [suino, setSuino] = useState(false);
  const [trigo, setTrigo] = useState(false);
  const [image, setImage] = useState(null);

  const [meals, setMeals] = useState([]);
  const [loadingMeals, setLoadingMeals] = useState(true);

  const mealTypeOptions = [
    { value: 0, text: "CAFÉ", default: false },
    { value: 1, text: "ALMOÇO", default: false },
    { value: 2, text: "JANTA", default: false },
  ];
  const mealRestaurantOptions = [
    { value: 0, text: "REFEITÓRIO", default: false },
    { value: 1, text: "EXECUTIVO", default: false },
  ];

  useEffect(() => {
    getAllMeals().then((response) => {
      setMeals(response);
      setLoadingMeals(false);
    });
  }, []);

  useEffect(() => {
    const user = sessionStorage.getItem(ADMIN_SESSION_KEY);
    if (user) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleSubmit = async () => {
    setErrorMessage("");
    setLoading(true);
    const res = await logIn(email, password);
    setLoading(false);
    if (res === true) {
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
    } else {
      setErrorMessage(res);
    }
  };
  const handleAddMeal = async () => {
    setMealErrorMessage("");
    if (!mealName || !mealRestaurant || !mealType) {
      setMealErrorMessage("O campo nome precisa ser preenchido.");
      return;
    }
    if (mealRestaurant === -1 || mealType === -1) {
      setMealErrorMessage("Selecione uma opção nos campos Tipo e Restaurante.");
      return;
    }
    if (!image) {
      setMealErrorMessage("Selecione uma imagem.");
      return;
    }
    setLoading(true);
    const res = await createMeal(
      {
        nome: mealName,
        restaurante: mealRestaurant,
        tipo_refeicao: mealType,
        cogumelo,
        leite,
        mel,
        oleaginosas,
        ovos,
        pimenta,
        soja,
        suino,
        trigo,
      },
      image
    );
    setLoading(false);
    if (res === true) {
      setMealName("");
      setMealRestaurant(-1);
      setMealType(-1);
      setCogumelo(false);
      setLeite(false);
      setMel(false);
      setOleaginosas(false);
      setOvos(false);
      setPimenta(false);
      setSoja(false);
      setSuino(false);
      setTrigo(false);
      setImage(undefined);
    } else {
      setMealErrorMessage(res);
    }
  };

  const handleLogout = async () => {
    const res = await logOut();
    console.log(res);
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <Dashboard
      meals={meals}
      setMeals={setMeals}
      loadingMeals={loadingMeals}
      setLoadingMeals={setLoadingMeals}
      handleLogOut={handleLogout}
      handleAddMeal={handleAddMeal}
      loading={loading}
      errorMessage={mealErrorMessage}
      mealName={mealName}
      setMealName={setMealName}
      mealRestaurant={mealRestaurant}
      setMealRestaurant={setMealRestaurant}
      mealRestaurantOptions={mealRestaurantOptions}
      mealType={mealType}
      setMealType={setMealType}
      mealTypeOptions={mealTypeOptions}
      leite={leite}
      setLeite={setLeite}
      cogumelo={cogumelo}
      setCogumelo={setCogumelo}
      mel={mel}
      setMel={setMel}
      oleaginosas={oleaginosas}
      setOleaginosas={setOleaginosas}
      ovos={ovos}
      setOvos={setOvos}
      pimenta={pimenta}
      setPimenta={setPimenta}
      soja={soja}
      setSoja={setSoja}
      suino={suino}
      setSuino={setSuino}
      trigo={trigo}
      setTrigo={setTrigo}
      image={image}
      setImage={setImage}
    />
  ) : (
    <Display
      loading={loading}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
    />
  );
}
