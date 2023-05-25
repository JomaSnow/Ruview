import styled from "styled-components";
import { colors } from "../../../util/design";

export const Input = styled.input`
  height: 1.2rem;
  width: 1.2rem;
  margin: 5px;
  border: 1px solid ${colors.black};
  transition: border 0.5s ease;
  outline: none;
  &:focus {
    border: 1px solid ${colors.accent};
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.black};
`;
