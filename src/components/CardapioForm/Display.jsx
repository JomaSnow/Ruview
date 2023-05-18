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
} from "./styles";
import SelectInput from "../SelectInput";
import Button from "../Button";

export default function Display({
  selectedRestaurant,
  setSelectedRestaurant,
  restaurantOptions,
}) {
  return (
    <CardapioSection>
      <HeaderArea>
        <SectionTitle>Cardápio</SectionTitle>
        <SelectInput
          value={selectedRestaurant}
          setValue={setSelectedRestaurant}
          options={restaurantOptions}
        />
      </HeaderArea>
      {
        // eslint-disable-next-line
        selectedRestaurant != -1 && (
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
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
              </Column>

              <Column>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
              </Column>

              <Column>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
              </Column>

              <Column>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
              </Column>

              <Column>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
              </Column>

              <Column>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
              </Column>

              <Column>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
                <Row>
                  <CalendarioCell>
                    <SelectInput />
                  </CalendarioCell>
                </Row>
              </Column>
            </Row>
          </CalendarioArea>
        )
      }

      <InfoAndButtonArea>
        <InfoText>Atualizado por último em: xx/xx/xxxx xx:xx</InfoText>
        <Button
          disabled={
            // eslint-disable-next-line
            selectedRestaurant == -1
          }
          text="Atualizar Cardápio"
          onClick={() => {}}
        />
      </InfoAndButtonArea>
    </CardapioSection>
  );
}
