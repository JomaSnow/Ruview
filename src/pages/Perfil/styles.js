import styled from "styled-components";
import { colors } from "../../util/design";

export const PageTitle = styled.h2`
  font-size: 2.5rem;
  color: ${colors.secondary};
  font-weight: 300;
  margin: 6rem 0;
`;

export const Main = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.white};
  padding: 9rem 5% 6rem 5%;
`;

export const ProfileCard = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  background-color: ${colors.off_white};
  box-shadow: 0 4px 4px 0 ${colors.shadow};
`;

export const FriendsArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  padding: 0 2% 0 5%;
`;

export const FriendProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  padding: 0.5rem;
  margin: 0 4rem 4rem 0;
  background-color: ${colors.secondary_lighter};
  box-shadow: 0 4px 4px 0 ${colors.shadow};
`;

export const FriendCardInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 3;
`;

export const FriendCardActionsArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const ProfileInfo = styled.span`
  font-size: 1.5rem;
  color: ${colors.black};
  font-weight: 700;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
