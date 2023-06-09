import React from "react";
import {
  Column,
  CopyText,
  FooterBackground,
  FooterCopyrightArea,
  FooterInfoArea,
  StyledAnchor,
  StyledLink,
  Text,
} from "./styles";
import { colors } from "../../util/design";

export default function Display() {
  return (
    <FooterBackground>
      <FooterInfoArea>
        <Column style={{ alignItems: "flex-start" }}>
          <ul>
            <li style={{ color: colors.white }}>
              <StyledLink to={"/"}>Home</StyledLink>
            </li>
            <li style={{ color: colors.white }}>
              <StyledLink to={"/sobre"}>Sobre</StyledLink>
            </li>
            <li style={{ color: colors.white }}>
              <StyledLink to={"/cardapio"}>Cardápio</StyledLink>
            </li>
          </ul>
        </Column>
        <Column>
          <Text>Trabalho de conclusão de curso.</Text>
          <Text>Ciência da Computação (Bacharel)</Text>
          <Text>Universidade de Brasília (UnB)</Text>
        </Column>
        <Column style={{ alignItems: "flex-end" }}>
          <Text>João Marcos Schmaltz Duda</Text>
          <StyledAnchor
            to={"https://github.com/JomaSnow/Ruview"}
            target="_blank"
            rel="noopner noreferrer"
          >
            Github do projeto
          </StyledAnchor>
        </Column>
      </FooterInfoArea>
      <FooterCopyrightArea>
        <CopyText>&copy; 2023</CopyText>
      </FooterCopyrightArea>
    </FooterBackground>
  );
}
