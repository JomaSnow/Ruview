import React from "react";
import {
  Main,
  MealsSection,
  PageTitle,
  RestaurantArea,
  SectionTitle,
  SpanText,
} from "./styles";
import Navbar from "../../components/Navbar";
import { ClipLoader } from "react-spinners";
import { colors } from "../../util/design";
import { useMealsOfDay } from "../../hooks/MealsOfDayProvider";

export default function Display({ today, cardapioDate, loading, hasError }) {
  const {
    cafeExecutivo,
    cafeRefeitorio,
    almocoExecutivo,
    almocoRefeitorio,
    jantaExecutivo,
    jantaRefeitorio,
  } = useMealsOfDay();

  return (
    <>
      <Navbar currentPage={0} />
      <Main>
        {cafeRefeitorio ? cafeRefeitorio.nome : "não funfou"}
        <PageTitle>Pratos do dia</PageTitle>
        <SpanText>
          {today}. (Atualizado em {cardapioDate})
        </SpanText>
        <MealsSection>
          {loading ? (
            <ClipLoader color={colors.accent} />
          ) : !hasError ? (
            <>
              <RestaurantArea>
                <SectionTitle>Refeitório</SectionTitle>
              </RestaurantArea>
              <RestaurantArea>
                <SectionTitle>Executivo</SectionTitle>
              </RestaurantArea>
            </>
          ) : (
            <SpanText style={{ color: colors.accent }}>{hasError}.</SpanText>
          )}
        </MealsSection>
      </Main>
    </>
  );
}
