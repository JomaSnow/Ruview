import styled from "styled-components";
import { colors } from "../../util/design";

export const PageTitle = styled.h2`
  font-size: 2.5rem;
  color: ${colors.secondary};
  font-weight: 300;
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  color: ${colors.black};
  font-weight: 300;
  margin-bottom: 0.125rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.white};
  padding: 15rem 5% 6rem 5%;
`;

export const SpanText = styled.span`
  font-size: 1.5rem;
  color: ${colors.shadow};
`;

export const MealsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 6rem 0;
`;

export const RestaurantArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;
