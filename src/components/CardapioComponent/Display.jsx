/* eslint eqeqeq: "off" */
import React from "react";
import {
  CalendarioArea,
  CardapioSection,
  HeaderArea,
  InfoAndButtonArea,
  InfoText,
  SectionTitle,
  Row,
  Column,
  CalendarioCell,
  CalendarioTitle,
  CalendarioMealTitle,
  MealName,
} from "./styles";
import SelectInput from "../Admin/SelectInput";
import { useMeals } from "../../hooks/MealsProvider";
import { useCardapio } from "../../hooks/CardapioProvider";
import { colors } from "../../util/design";
import { ClipLoader } from "react-spinners";

export default function Display({
  selectedRestaurant,
  setSelectedRestaurant,
  restaurantOptions,

  updatedAt,

  segundaCafe,
  segundaAlmoco,
  segundaJanta,

  tercaCafe,
  tercaAlmoco,
  tercaJanta,

  quartaCafe,
  quartaAlmoco,
  quartaJanta,

  quintaCafe,
  quintaAlmoco,
  quintaJanta,

  sextaCafe,
  sextaAlmoco,
  sextaJanta,

  sabadoCafe,
  sabadoAlmoco,
  sabadoJanta,

  domingoCafe,
  domingoAlmoco,
  domingoJanta,

  selectedRestaurantText,
}) {
  const mealsProvider = useMeals();
  const cardapioProvider = useCardapio();

  return (
    <CardapioSection>
      <HeaderArea>
        <SectionTitle>{selectedRestaurantText}</SectionTitle>
        <div style={{ width: "20%" }}>
          {cardapioProvider.loading || mealsProvider.loading ? null : (
            <SelectInput
              value={selectedRestaurant}
              setValue={setSelectedRestaurant}
              options={restaurantOptions}
            />
          )}
        </div>
      </HeaderArea>
      {cardapioProvider.loading || mealsProvider.loading ? (
        <ClipLoader color={colors.accent} />
      ) : (
        <>
          {selectedRestaurant != -1 && (
            <CalendarioArea className="area">
              <Row className="days" style={{ flex: 0 }}>
                <Column style={{ flex: 0 }} />
                <Column>
                  <CalendarioTitle>Segunda</CalendarioTitle>
                </Column>
                <Column>
                  <CalendarioTitle>Terça</CalendarioTitle>
                </Column>
                <Column>
                  <CalendarioTitle>Quarta</CalendarioTitle>
                </Column>
                <Column>
                  <CalendarioTitle>Quinta</CalendarioTitle>
                </Column>
                <Column>
                  <CalendarioTitle>Sexta</CalendarioTitle>
                </Column>
                <Column>
                  <CalendarioTitle>Sábado</CalendarioTitle>
                </Column>
                <Column>
                  <CalendarioTitle>Domingo</CalendarioTitle>
                </Column>
              </Row>
              <Row className="calendario-row">
                <Column style={{ flex: 0 }}>
                  <Row style={{ justifyContent: "flex-end" }}>
                    <CalendarioMealTitle>Café da manhã</CalendarioMealTitle>
                  </Row>
                  <Row style={{ justifyContent: "flex-end" }}>
                    <CalendarioMealTitle>Almoço</CalendarioMealTitle>
                  </Row>
                  <Row style={{ justifyContent: "flex-end" }}>
                    <CalendarioMealTitle>Janta</CalendarioMealTitle>
                  </Row>
                </Column>

                <Column>
                  <Row>
                    <CalendarioCell>
                      <MealName>{segundaCafe}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{segundaAlmoco}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{segundaJanta}</MealName>
                    </CalendarioCell>
                  </Row>
                </Column>

                <Column>
                  <Row>
                    <CalendarioCell>
                      <MealName>{tercaCafe}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{tercaAlmoco}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{tercaJanta}</MealName>
                    </CalendarioCell>
                  </Row>
                </Column>

                <Column>
                  <Row>
                    <CalendarioCell>
                      <MealName>{quartaCafe}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{quartaAlmoco}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{quartaJanta}</MealName>
                    </CalendarioCell>
                  </Row>
                </Column>

                <Column>
                  <Row>
                    <CalendarioCell>
                      <MealName>{quintaCafe}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{quintaAlmoco}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{quintaJanta}</MealName>
                    </CalendarioCell>
                  </Row>
                </Column>

                <Column>
                  <Row>
                    <CalendarioCell>
                      <MealName>{sextaCafe}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{sextaAlmoco}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{sextaJanta}</MealName>
                    </CalendarioCell>
                  </Row>
                </Column>

                <Column>
                  <Row>
                    <CalendarioCell>
                      <MealName>{sabadoCafe}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{sabadoAlmoco}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{sabadoJanta}</MealName>
                    </CalendarioCell>
                  </Row>
                </Column>

                <Column>
                  <Row>
                    <CalendarioCell>
                      <MealName>{domingoCafe}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{domingoAlmoco}</MealName>
                    </CalendarioCell>
                  </Row>
                  <Row>
                    <CalendarioCell>
                      <MealName>{domingoJanta}</MealName>
                    </CalendarioCell>
                  </Row>
                </Column>
              </Row>
            </CalendarioArea>
          )}
        </>
      )}
      <InfoAndButtonArea>
        {selectedRestaurant != -1 && (
          <InfoText>Atualizado por último em: {updatedAt}</InfoText>
        )}
      </InfoAndButtonArea>
    </CardapioSection>
  );
}
