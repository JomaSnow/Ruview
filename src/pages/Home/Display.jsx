import React from "react";
import { PageTitle } from "./styles";
import { Link } from "react-router-dom";

export default function Display() {
  return (
    <main>
      <PageTitle>Welcome Home</PageTitle>
      <Link to={"admin"}>admin</Link>
    </main>
  );
}
