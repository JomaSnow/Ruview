import React from "react";
import { Main, PageTitle } from "./styles";
import Navbar from "../../components/Navbar";

export default function Display() {
  return (
    <>
      <Navbar currentPage={2} />
      <Main>
        <PageTitle>Cardápio</PageTitle>
      </Main>
    </>
  );
}
