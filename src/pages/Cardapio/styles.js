import styled from "styled-components";
import { colors } from "../../util/design";

export const PageTitle = styled.h2`
  font-size: 2.5rem;
  color: ${colors.secondary};
  font-weight: 300;
  margin-bottom: 6rem;
`;

export const Main = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.white};
  padding: 15rem 5% 6rem 5%;
`;
