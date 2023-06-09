import React from "react";
import {
  Button,
  ButtonsArea,
  ButtonsLoaderWrapper,
  CardArea,
  CardInfoText,
  CardTitle,
  Column,
  FriendsArea,
  Image,
  ImageArea,
  InfosArea,
  MealInfoSection,
  SocialArea,
} from "./styles";
import { useSolid } from "../../hooks/SolidProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../util/design";
import { ClipLoader } from "react-spinners";
import { usePodFriends } from "../../hooks/PodFriendsProvider";

export default function Display({
  meal,
  type,
  attributes,
  handleLikeMeal,
  handleDislikeMeal,
  handleUndoLike,
  handleUndoDislike,
  loading,
  hasLiked,
  hasDisliked,
  friendsWhoLiked = [],
  friendsWhoDisliked = [],
}) {
  const { webId } = useSolid();

  const { loadingFriends } = usePodFriends();

  return (
    <CardArea>
      <MealInfoSection>
        <ImageArea>
          <Image src={meal.image} />
        </ImageArea>
        <InfosArea>
          <CardTitle>{meal.nome}</CardTitle>
          <CardInfoText>{type}</CardInfoText>
          <CardInfoText>Contém: {attributes}</CardInfoText>
        </InfosArea>
      </MealInfoSection>
      <SocialArea>
        {webId ? (
          <>
            <ButtonsArea>
              {loading ? (
                <ButtonsLoaderWrapper>
                  <ClipLoader color={colors.accent} />
                </ButtonsLoaderWrapper>
              ) : hasLiked ? (
                <Column>
                  <CardInfoText style={{ fontSize: "0.7rem" }} $center>
                    Você gosta desse prato.
                  </CardInfoText>
                  <CardInfoText
                    $center
                    $link
                    onClick={(e) => {
                      e.preventDefault();
                      handleUndoLike();
                    }}
                  >
                    Mudou de ideia?
                  </CardInfoText>
                </Column>
              ) : hasDisliked ? (
                <Column>
                  <CardInfoText style={{ fontSize: "0.7rem" }} $center>
                    Você não gosta desse prato.
                  </CardInfoText>
                  <CardInfoText
                    $center
                    $link
                    onClick={(e) => {
                      e.preventDefault();
                      handleUndoDislike();
                    }}
                  >
                    Mudou de ideia?
                  </CardInfoText>
                </Column>
              ) : (
                <>
                  <Button
                    $likeButton
                    onClick={(e) => {
                      e.preventDefault();
                      handleLikeMeal();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      color={colors.white}
                      style={{ fontSize: "1.2rem" }}
                    />
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDislikeMeal();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      color={colors.white}
                      style={{ fontSize: "1.2rem" }}
                    />
                  </Button>
                </>
              )}
            </ButtonsArea>
            <FriendsArea>
              {loadingFriends ? (
                <Column>
                  <ClipLoader color={colors.accent} />
                </Column>
              ) : friendsWhoLiked.length === 0 &&
                friendsWhoDisliked.length === 0 ? (
                <CardInfoText>Nenhum amigo avaliou este prato.</CardInfoText>
              ) : (
                <>
                  {friendsWhoLiked.map((f) => {
                    return (
                      <CardInfoText key={f.nome + meal.id}>
                        {f.nome} gosta deste prato.
                      </CardInfoText>
                    );
                  })}
                  {friendsWhoDisliked.map((f) => {
                    return (
                      <CardInfoText key={f.nome + meal.id}>
                        {f.nome} não gosta deste prato.
                      </CardInfoText>
                    );
                  })}
                </>
              )}
            </FriendsArea>
          </>
        ) : (
          <CardInfoText $center>
            Permita acesso ao seu POD para avaliar e ver o que seus amigos acham
            deste prato.
          </CardInfoText>
        )}
      </SocialArea>
    </CardArea>
  );
}
