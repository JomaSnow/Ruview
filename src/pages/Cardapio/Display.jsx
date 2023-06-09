import React from "react";
import { Main, PageTitle } from "./styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardapioComponent from "../../components/CardapioComponent";

export default function Display() {
  return (
    <>
      <Navbar currentPage={2} />
      <Main>
        <PageTitle>Cardápio</PageTitle>
        <CardapioComponent />
      </Main>
      <Footer />
    </>
  );
}
