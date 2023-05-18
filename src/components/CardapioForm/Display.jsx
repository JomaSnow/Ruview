import React, { useEffect } from "react";
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

  cafeOptions,
  almocoOptions,
  jantaOptions,

  segundaCafe,
  setSegundaCafe,
  segundaAlmoco,
  setSegundaAlmoco,
  segundaJanta,
  setSegundaJanta,

  tercaCafe,
  setTercaCafe,
  tercaAlmoco,
  setTercaAlmoco,
  tercaJanta,
  setTercaJanta,

  quartaCafe,
  setQuartaCafe,
  quartaAlmoco,
  setQuartaAlmoco,
  quartaJanta,
  setQuartaJanta,

  quintaCafe,
  setQuintaCafe,
  quintaAlmoco,
  setQuintaAlmoco,
  quintaJanta,
  setQuintaJanta,

  sextaCafe,
  setSextaCafe,
  sextaAlmoco,
  setSextaAlmoco,
  sextaJanta,
  setSextaJanta,

  sabadoCafe,
  setSabadoCafe,
  sabadoAlmoco,
  setSabadoAlmoco,
  sabadoJanta,
  setSabadoJanta,

  domingoCafe,
  setDomingoCafe,
  domingoAlmoco,
  setDomingoAlmoco,
  domingoJanta,
  setDomingoJanta,
}) {
  useEffect(() => {
    // console.log(cafeOptions);
    // console.log(almocoOptions);
    // console.log(jantaOptions);
  }, [cafeOptions, almocoOptions, jantaOptions]);

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
                  <SelectInput
                    options={cafeOptions}
                    value={segundaCafe}
                    setValue={setSegundaCafe}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={almocoOptions}
                    value={segundaAlmoco}
                    setValue={setSegundaAlmoco}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={jantaOptions}
                    value={segundaJanta}
                    setValue={setSegundaJanta}
                  />
                </CalendarioCell>
              </Row>
            </Column>

            <Column>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={cafeOptions}
                    value={tercaCafe}
                    setValue={setTercaCafe}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={almocoOptions}
                    value={tercaAlmoco}
                    setValue={setTercaAlmoco}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={jantaOptions}
                    value={tercaJanta}
                    setValue={setTercaJanta}
                  />
                </CalendarioCell>
              </Row>
            </Column>

            <Column>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={cafeOptions}
                    value={quartaCafe}
                    setValue={setQuartaCafe}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={almocoOptions}
                    value={quartaAlmoco}
                    setValue={setQuartaAlmoco}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={jantaOptions}
                    value={quartaJanta}
                    setValue={setQuartaJanta}
                  />
                </CalendarioCell>
              </Row>
            </Column>

            <Column>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={cafeOptions}
                    value={quintaCafe}
                    setValue={setQuintaCafe}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={almocoOptions}
                    value={quintaAlmoco}
                    setValue={setQuintaAlmoco}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={jantaOptions}
                    value={quintaJanta}
                    setValue={setQuintaJanta}
                  />
                </CalendarioCell>
              </Row>
            </Column>

            <Column>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={cafeOptions}
                    value={sextaCafe}
                    setValue={setSextaCafe}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={almocoOptions}
                    value={sextaAlmoco}
                    setValue={setSextaAlmoco}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={jantaOptions}
                    value={sextaJanta}
                    setValue={setSextaJanta}
                  />
                </CalendarioCell>
              </Row>
            </Column>

            <Column>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={cafeOptions}
                    value={sabadoCafe}
                    setValue={setSabadoCafe}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={almocoOptions}
                    value={sabadoAlmoco}
                    setValue={setSabadoAlmoco}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={jantaOptions}
                    value={sabadoJanta}
                    setValue={setSabadoJanta}
                  />
                </CalendarioCell>
              </Row>
            </Column>

            <Column>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={cafeOptions}
                    value={domingoCafe}
                    setValue={setDomingoCafe}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={almocoOptions}
                    value={domingoAlmoco}
                    setValue={setDomingoAlmoco}
                  />
                </CalendarioCell>
              </Row>
              <Row>
                <CalendarioCell>
                  <SelectInput
                    options={jantaOptions}
                    value={domingoJanta}
                    setValue={setDomingoJanta}
                  />
                </CalendarioCell>
              </Row>
            </Column>
          </Row>
        </CalendarioArea>
      )}

      <InfoAndButtonArea>
        <InfoText>Atualizado por último em: xx/xx/xxxx xx:xx</InfoText>
        <Button
          disabled={selectedRestaurant == -1}
          text="Atualizar Cardápio"
          onClick={() => {}}
        />
      </InfoAndButtonArea>
    </CardapioSection>
  );
}
