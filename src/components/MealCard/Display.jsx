import React, { useEffect, useState } from "react";
import {
  ActionsWrapper,
  AttributesArea,
  AttributesRow,
  AttributesText,
  Card,
  CardTitle,
  Image,
  ImageArea,
  InfoArea,
  InfosWrapper,
  NameRow,
  Span,
} from "./styles";
import Button from "../Button";
import DefaultMealImage from "../../assets/images/default_meal.jpg";

export default function Display({ meal, toggled, setToggled = () => {} }) {
  const [img, setImg] = useState(DefaultMealImage);

  useEffect(() => {
    setImg(meal.image);
  }, [meal]);

  return (
    <Card>
      <InfosWrapper
        onClick={() => {
          setToggled(!toggled);
        }}
      >
        <ImageArea>
          <Image alt={meal.nome} src={img} />
        </ImageArea>
        <InfoArea>
          <NameRow>
            <CardTitle>{meal.nome}</CardTitle>
          </NameRow>
          <AttributesArea>
            <Span>Contém:</Span>
            <AttributesRow>
              {!meal.leite &&
                !meal.cogumelo &&
                !meal.mel &&
                !meal.oleaginosas &&
                !meal.ovos &&
                !meal.pimenta &&
                !meal.soja &&
                !meal.suino &&
                !meal.trigo && <AttributesText>Nenhum atributo</AttributesText>}
              {meal.leite && <AttributesText>Leite</AttributesText>}
              {meal.cogumelo && <AttributesText>Cogumelo</AttributesText>}
              {meal.mel && <AttributesText>Mel</AttributesText>}
              {meal.oleaginosas && <AttributesText>Oleaginosas</AttributesText>}
              {meal.ovos && <AttributesText>Ovos</AttributesText>}
              {meal.pimenta && <AttributesText>Pimenta</AttributesText>}
              {meal.soja && <AttributesText>Soja</AttributesText>}
              {meal.suino && <AttributesText>Suíno</AttributesText>}
              {meal.trigo && <AttributesText>Trigo</AttributesText>}
            </AttributesRow>
          </AttributesArea>
        </InfoArea>
      </InfosWrapper>
      <ActionsWrapper $toggled={toggled}>
        <Button
          text="Editar"
          onClick={() => {
            console.log("Editar");
          }}
        />
        <Button
          text="Apagar"
          onClick={() => {
            console.log("Apagar");
          }}
        />
      </ActionsWrapper>
    </Card>
  );
}
