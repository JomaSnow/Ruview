import styled from "styled-components";
import { colors } from "../../../util/design";

export const Button = styled.button`
  padding: 0.4rem 0.5rem;
  margin: 5px;
  font-size: 1rem;
  font-weight: 700;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  color: ${(props) => (props.disabled ? colors.shadow : colors.white)};
  background-color: ${(props) =>
    props.disabled ? colors.primary : colors.accent};
  border: 1px solid ${colors.black};
  transition: all 0.5s ease;
  &:focus {
    border: 1px solid ${colors.accent};
  }
  &:hover {
    border: 1px solid ${colors.accent};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;
