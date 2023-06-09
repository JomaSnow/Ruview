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
import MealOfDayCard from "../../components/MealOfDayCard";
import Footer from "../../components/Footer";

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
                <MealOfDayCard meal={cafeRefeitorio} type="cafe" />
                <MealOfDayCard meal={almocoRefeitorio} type="almoco" />
                <MealOfDayCard meal={jantaRefeitorio} type="janta" />
              </RestaurantArea>
              <RestaurantArea>
                <SectionTitle>Executivo</SectionTitle>
                <MealOfDayCard meal={cafeExecutivo} type="cafe" />
                <MealOfDayCard meal={almocoExecutivo} type="almoco" />
                <MealOfDayCard meal={jantaExecutivo} type="janta" />
              </RestaurantArea>
            </>
          ) : (
            <SpanText style={{ color: colors.accent }}>{hasError}.</SpanText>
          )}
        </MealsSection>
      </Main>
      <Footer />
    </>
  );
}
