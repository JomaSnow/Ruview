/* eslint eqeqeq: "off" */
import React from "react";
import {
  HeaderBackground,
  LogoText,
  HeaderLink,
  NavigationArea,
} from "./styles";
// import { LoginButton } from "@inrupt/solid-ui-react";

export default function Display({ currentPage }) {
  return (
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
        {/* <LoginButton
          oidcIssuer="https://inrupt.net"
          redirectUrl="https://localhost:3000/sobre"
        > */}
        <HeaderLink>Login</HeaderLink>
        {/* </LoginButton> */}
      </NavigationArea>
    </HeaderBackground>
  );
}
