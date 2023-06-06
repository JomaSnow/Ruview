import styled from "styled-components";

import { colors } from "../../util/design";

export const CardArea = styled.div`
  width: 520px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.off_white};
  box-shadow: 0 4px 4px 0 ${colors.shadow};
  margin: 0 0 4.125rem 0;
  padding: 0 1.5rem 1rem 0;
`;

export const MealInfoSection = styled.div`
  display: flex;
  flex: 16;
  flex-direction: row;
`;

export const SocialArea = styled.div`
  display: flex;
  flex: 9;
  padding: 0 0 0rem 1rem;
  justify-content: center;
  align-items: center;
`;

export const InfosArea = styled.div`
  display: flex;
  flex: 16;
  padding: 1.5rem 0 1rem 1.25rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ImageArea = styled.div`
  display: flex;
  flex: 9;
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex: 7;
  padding-right: 1.4rem;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const FriendsArea = styled.div`
  display: flex;
  flex: 16;
  height: 100%;
`;

export const CardTitle = styled.h4`
  font-size: 1.9rem;
  color: ${colors.black};
  font-weight: 700;
`;

export const CardInfoText = styled.span`
  font-size: 0.9rem;
  color: ${colors.shadow};
  font-weight: 700;
  text-align: ${(props) => (props.$center ? "center" : "left")};
`;

export const Image = styled.img`
  height: 11rem;
  width: 11rem;
  object-fit: cover;
`;

export const Button = styled.button`
  height: 54px;
  width: 54px;
  border-radius: 100%;
  border: none;
  background-color: ${(props) =>
    props.$likeButton ? colors.secondary : colors.accent};
  &:hover {
    cursor: pointer;
  }
`;
