import React from "react";
import { Main } from "./styles";
import Button from "../../components/Button";

export default function Dashboard({ handleLogOut = () => {} }) {
  return (
    <Main>
      <Button text="Sair" onClick={handleLogOut} />
    </Main>
  );
}
