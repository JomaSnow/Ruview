import styled from "styled-components";
import { colors } from "../../util/design";
import { Link } from "react-router-dom";

export const HeaderBackground = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  width: 100%;
  height: 9rem;
  background-color: ${colors.primary};
  z-index: 9;
`;

export const NavigationArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export const LogoText = styled.h1`
  font-size: 4rem;
  color: ${colors.black};
  font-family: serif;
  font-weight: 700;
`;

export const HeaderLink = styled(Link)`
  font-size: 1.8rem;
  margin-left: 2rem;
  color: ${colors.white};
  font-family: sans-serif;
  font-weight: 700;
  text-decoration: ${(props) => (props.$selected ? "underline" : "none")};
  transition: all 0.5s ease;
  &:hover {
    color: ${colors.accent};
    text-decoration: underline;
  }
`;
