import React from "react";
import {
  FriendCardActionsArea,
  FriendCardInfoArea,
  FriendProfileCard,
  FriendsArea,
  InputArea,
  Main,
  PageTitle,
  ProfileCard,
  ProfileInfo,
} from "./styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { usePodFriends } from "../../hooks/PodFriendsProvider";
import { colors } from "../../util/design";
import { ClipLoader } from "react-spinners";
import { useSolid } from "../../hooks/SolidProvider";
import MainButton from "../../components/MainButton";
import TextInput from "../../components/TextInput";
import { Link } from "react-router-dom";

export default function Display({
  handleRemoveFriend,
  handleAddFriend,
  friendValue,
  setFriendValue,
}) {
  const { friends, loadingFriends } = usePodFriends();

  const { userProfile, loadingProfile } = useSolid();

  return (
    <>
      <Navbar currentPage={3} />
      <Main>
        <PageTitle>Perfil</PageTitle>
        {loadingProfile || !userProfile ? (
          <ClipLoader color={colors.accent} />
        ) : (
          <ProfileCard>
            <ProfileInfo>{userProfile.firstName}</ProfileInfo>
          </ProfileCard>
        )}
        <PageTitle>Amigos</PageTitle>
        <FriendsArea>
          {loadingFriends ? (
            <ClipLoader color={colors.accent} />
          ) : (
            <>
              <InputArea>
                <TextInput
                  placeholder={"WebID do amigo"}
                  type={"text"}
                  value={friendValue}
                  setValue={setFriendValue}
                />
                <MainButton
                  text="Adicionar Amigo"
                  disabled={!friendValue}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddFriend();
                  }}
                />
              </InputArea>
              {friends.map((f) => {
                return (
                  <>
                    <FriendProfileCard
                      key={f.nome}
                      to={f.friendWebId}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FriendCardInfoArea>
                        <ProfileInfo>{f.nome}</ProfileInfo>
                      </FriendCardInfoArea>
                      <FriendCardActionsArea>
                        <MainButton
                          text="Excluir"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveFriend(f.friendWebId);
                          }}
                        />
                        <Link
                          to={f.friendWebId}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visitar POD
                        </Link>
                      </FriendCardActionsArea>
                    </FriendProfileCard>
                  </>
                );
              })}
            </>
          )}
        </FriendsArea>
      </Main>
      <Footer />
    </>
  );
}
