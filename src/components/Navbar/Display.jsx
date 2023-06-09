/* eslint eqeqeq: "off" */
// https://inrupt.net/
import React from "react";
import {
  HeaderBackground,
  LogoText,
  HeaderLink,
  NavigationArea,
  LoginModal,
  Column,
  LabelText,
  Form,
  PodInfoText,
  PodLinkText,
} from "./styles";
import MainButton from "../MainButton";
import TextInput from "../TextInput";
import { useSolid } from "../../hooks/SolidProvider";
import { ClipLoader } from "react-spinners";
import { colors } from "../../util/design";

export default function Display({
  currentPage,
  modalToggle = false,
  loading = false,
  handleModalToggle = () => {},
  podUrl = "",
  setPodUrl = () => {},
  modalRef,
  handleLogIn = () => {},
  handleLogOut = () => {},
}) {
  const webId = useSolid();

  return (
    <>
      <HeaderBackground>
        <LogoText>Ruview</LogoText>
        <NavigationArea>
          <HeaderLink to={"/"} $selected={currentPage == 0}>
            Home
          </HeaderLink>
          <HeaderLink to={"/sobre"} $selected={currentPage == 1}>
            Sobre
          </HeaderLink>
          <HeaderLink to={"/cardapio"} $selected={currentPage == 2}>
            Cardápio
          </HeaderLink>
          {!webId ? (
            <HeaderLink onClick={handleModalToggle}>Login</HeaderLink>
          ) : (
            <HeaderLink to={"/perfil"} $selected={currentPage == 3}>
              Perfil
            </HeaderLink>
          )}
        </NavigationArea>
      </HeaderBackground>
      <LoginModal ref={modalRef} $active={modalToggle}>
        <Column>
          <LabelText>Provedor POD:</LabelText>
          <Form>
            <TextInput
              type="text"
              placeholder={"https://login.pod-provider.com/"}
              value={podUrl}
              setValue={setPodUrl}
            />
            {!loading ? (
              <MainButton
                type="submit"
                disabled={!podUrl}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogIn();
                }}
              />
            ) : (
              <ClipLoader color={colors.accent} />
            )}
          </Form>
        </Column>
      </LoginModal>
      {webId && (
        <PodInfoText>
          Autenticado como:{" "}
          <PodLinkText
            style={{ textDecoration: "none" }}
            to={webId}
            target="_blank"
            rel="noopener noreferrer"
          >
            {webId}
          </PodLinkText>
          .{" "}
          {!loading ? (
            <PodLinkText
              onClick={(e) => {
                e.preventDefault();
                handleLogOut();
              }}
            >
              Logout
            </PodLinkText>
          ) : (
            <ClipLoader color={colors.black} />
          )}
        </PodInfoText>
      )}
    </>
  );
}
