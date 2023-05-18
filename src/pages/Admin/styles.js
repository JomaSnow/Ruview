import styled from "styled-components";
import { colors } from "../../util/design";

export const PageTitle = styled.h1`
  font-size: 2rem;
  color: ${colors.secondary};
`;
export const SectionTitle = styled.h2`
  margin-bottom: 0.6rem;
  font-size: 1.5rem;
  color: ${colors.secondary};
`;

export const Main = styled.main`
  display: flex;
  position: relative;
  padding: 2rem 4rem;
  width: 100%;
  flex-direction: column;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  align-items: center;
  background-color: ${colors.primary};
`;

export const NewMealArea = styled.section`
  display: flex;
  position: relative;
  flex: 1;
  height: 750px;
  overflow-y: auto;
  background-color: ${colors.off_white};
  box-shadow: 2px 2px 4px 1px ${colors.shadow};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 4px;
  padding: 12px;
`;

export const MealsArea = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${colors.off_white};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2px;
`;

export const LoginArea = styled.section`
  display: flex;
  position: relative;
  width: 40%;
  min-height: 100px;
  background-color: ${colors.off_white};
  box-shadow: 2px 2px 4px 1px ${colors.shadow};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
  padding: 12px;
`;

export const Form = styled.form`
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.padding || 0};
`;

export const ErrorMessage = styled.span`
  color: ${colors.accent};
  font-weight: 700;
`;
