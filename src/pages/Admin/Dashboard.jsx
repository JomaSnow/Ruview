import React from "react";
import {
  Main,
  NewMealArea,
  SectionTitle,
  Row,
  ErrorMessage,
  MealsArea,
} from "./styles";
import Button from "../../components/Admin/Button";
import CheckboxInput from "../../components/Admin/CheckboxInput";
import TextInput from "../../components/TextInput";
import { colors } from "../../util/design";
import { ClipLoader } from "react-spinners";
import SelectInput from "../../components/Admin/SelectInput";
import ImageInput from "../../components/Admin/ImageInput";
import MealCard from "../../components/Admin/MealCard";
import CardapioForm from "../../components/Admin/CardapioForm";

export default function Dashboard({
  handleLogOut = () => {},
  handleAddMeal = () => {},
  loading = false,
  errorMessage = "",
  mealName,
  setMealName,
  mealRestaurant,
  setMealRestaurant,
  mealRestaurantOptions,
  mealType,
  setMealType,
  mealTypeOptions,
  leite,
  setLeite,
  cogumelo,
  setCogumelo,
  mel,
  setMel,
  oleaginosas,
  setOleaginosas,
  ovos,
  setOvos,
  pimenta,
  setPimenta,
  soja,
  setSoja,
  suino,
  setSuino,
  trigo,
  setTrigo,
  image,
  setImage,
  meals = [],
  loadingMeals,
}) {
  return (
    <Main>
      <Row>
        <CardapioForm meals={meals} />
      </Row>
      <Row>
        <NewMealArea>
          <SectionTitle>Cadastrar Nova Refeição</SectionTitle>
          <TextInput
            placeholder="Nome"
            value={mealName}
            setValue={setMealName}
          />
          <SelectInput
            value={mealType}
            setValue={setMealType}
            options={mealTypeOptions}
          />
          <SelectInput
            value={mealRestaurant}
            setValue={setMealRestaurant}
            options={mealRestaurantOptions}
          />
          <CheckboxInput
            label="Contém leite"
            value={leite}
            setValue={setLeite}
          />
          <CheckboxInput
            label="Contém cogumelo"
            value={cogumelo}
            setValue={setCogumelo}
          />
          <CheckboxInput label="Contém mel" value={mel} setValue={setMel} />
          <CheckboxInput
            label="Contém oleaginosas"
            value={oleaginosas}
            setValue={setOleaginosas}
          />
          <CheckboxInput label="Contém ovos" value={ovos} setValue={setOvos} />
          <CheckboxInput
            label="Contém pimenta"
            value={pimenta}
            setValue={setPimenta}
          />
          <CheckboxInput label="Contém soja" value={soja} setValue={setSoja} />
          <CheckboxInput
            label="Contém suíno"
            value={suino}
            setValue={setSuino}
          />
          <CheckboxInput
            label="Contém trigo"
            value={trigo}
            setValue={setTrigo}
          />
          <ImageInput value={image} setValue={setImage} />
          <Row padding="0 10% 0 0">
            <Button text="Adicionar" onClick={handleAddMeal} />
            {!loading && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {loading && <ClipLoader color={colors.accent} />}
          </Row>
        </NewMealArea>
        <NewMealArea>
          <SectionTitle>Refeições Cadastradas</SectionTitle>
          <MealsArea>
            {loadingMeals && <ClipLoader color={colors.accent} />}
            {!loadingMeals &&
              meals.map((m) => {
                return <MealCard key={m.id} meal={m} />;
              })}
          </MealsArea>
        </NewMealArea>
      </Row>
    </Main>
  );
}
