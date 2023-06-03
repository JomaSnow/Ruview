/* eslint eqeqeq: "off" */
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
} from "./styles";
import MainButton from "../MainButton";
import TextInput from "../TextInput";

export default function Display({
  currentPage,
  modalToggle = false,
  handleModalToggle = () => {},
  podUrl = "",
  setPodUrl = () => {},
  modalRef,
  handleLogIn = () => {},
}) {
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
          <HeaderLink onClick={handleModalToggle}>Login</HeaderLink>
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
            <MainButton
              type="submit"
              disabled={!podUrl}
              onClick={(e) => {
                e.preventDefault();
                handleLogIn();
              }}
            />
          </Form>
        </Column>
      </LoginModal>
    </>
  );
}
