import React from "react";
import { Main, PageTitle } from "./styles";
import Navbar from "../../components/Navbar";

export default function Display({ meals = [] }) {
  return (
    <>
      <Navbar currentPage={0} />
      <Main>
        <PageTitle>Pratos do dia</PageTitle>
      </Main>
    </>
  );
}
