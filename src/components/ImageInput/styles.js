import styled from "styled-components";
import { colors } from "../../util/design";

export const Input = styled.input`
  width: 90%;
  height: 1.4rem;
  padding: 0.1rem;
  padding-left: 0.3rem;
  margin: 5px;
  font-size: 1rem;
  color: ${colors.black};
  border: 1px solid ${colors.black};
  transition: border 0.5s ease;
  outline: none;
  &:focus {
    border: 1px solid ${colors.accent};
  }
`;
