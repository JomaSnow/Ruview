import styled from "styled-components";
import { colors } from "../../../util/design";

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 10px 4px;
  width: 90%;
  background-color: ${colors.white};
  border: 1px solid ${colors.accent};
  &:hover{
    border: 3px solid ${colors.accent};

  }
`;

export const InfosWrapper = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ActionsWrapper = styled.div`
  display: ${(props) => (props.$toggled ? "flex" : "none")};
  position: relative;
  height: ${(props) => (props.$toggled ? "50px" : "0px")};
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 20px;
`;

export const ImageArea = styled.div`
  display: flex;
  position: relative;
  min-height: 150px;
  width: 33%;
`;

export const Image = styled.img`
  display: flex;
  position: relative;
  object-fit: fill;
  height: 150px;
  width: 180px;
`;

export const InfoArea = styled.div`
  display: flex;
  position: relative;
  width: 66%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const NameRow = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;

export const CardTitle = styled.h4`
  color: ${colors.secondary_lighter};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Span = styled.span`
  color: ${colors.black};
  font-size: 1rem;
  font-weight: 300;
`;

export const AttributesText = styled.span`
  color: ${colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  margin: 5px 5px 5px 0;
`;

export const AttributesArea = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`;

export const AttributesRow = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
