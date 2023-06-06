import React from "react";
import {
  Button,
  ButtonsArea,
  ButtonsLoaderWrapper,
  CardArea,
  CardInfoText,
  CardTitle,
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

export default function Display({
  meal,
  type,
  attributes,
  handleLikeMeal,
  handleDislikeMeal,
  loading,
}) {
  const webId = useSolid();

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
            <FriendsArea></FriendsArea>
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
