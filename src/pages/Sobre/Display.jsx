import React from "react";
import { Main, PageTitle } from "./styles";
import Navbar from "../../components/Navbar";
import Name from "../../components/SolidTest";

export default function Display({ meals = [] }) {
  return (
    <>
      <Navbar currentPage={1} />
      <Main>
        <PageTitle>Sobre</PageTitle>
        <Name />
      </Main>
    </>
  );
}
