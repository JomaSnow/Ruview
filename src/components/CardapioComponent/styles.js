import styled from "styled-components";
import { colors } from "../../util/design";

export const SectionTitle = styled.h2`
  margin-bottom: 0.6rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.shadow};
  flex: 1;
`;

export const CardapioSection = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  background-color: ${colors.off_white};
  box-shadow: 2px 2px 4px 1px ${colors.shadow};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 4px;
  padding: 12px 12px 12px 12px;
`;

export const HeaderArea = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const InfoAndButtonArea = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const InfoText = styled.span`
  font-size: 1rem;
  color: ${colors.secondary};
`;

export const CalendarioTitle = styled.span`
  font-size: 1.2rem;
  color: ${colors.secondary_lighter};
  font-weight: 700;
  align-self: center;
`;

export const CalendarioMealTitle = styled.span`
  font-size: 1.2rem;
  color: ${colors.secondary_lighter};
  font-weight: 700;
  align-self: center;
  writing-mode: vertical-rl;
  rotate: 180deg;
`;

export const MealName = styled.span`
  font-size: 0.9rem;
  color: ${colors.black};
  align-self: center;
  word-wrap: break-word;
`;

export const CalendarioArea = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  height: 600px;
`;

export const Row = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex: 1;
`;

export const Column = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
`;

export const CalendarioCell = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  border: ${colors.secondary_lighter} 1px solid;
  background-color: ${colors.white};
  &:hover {
    background-color: ${colors.off_white};
  }
`;
