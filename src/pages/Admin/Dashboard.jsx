import React from "react";
import { Main, NewMealArea, SectionTitle, Row, ErrorMessage } from "./styles";
import Button from "../../components/Button";
import CheckboxInput from "../../components/CheckboxInput";
import TextInput from "../../components/TextInput";
import { colors } from "../../util/design";
import { ClipLoader } from "react-spinners";
import SelectInput from "../../components/SelectInput";
import ImageInput from "../../components/ImageInput";

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
}) {
  return (
    <Main>
      <Button text="Sair" onClick={handleLogOut} />
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
        <NewMealArea></NewMealArea>
      </Row>
    </Main>
  );
}
