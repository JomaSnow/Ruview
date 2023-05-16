import React from "react";
import { PageTitle } from "./styles";
import { Link } from "react-router-dom";

export default function Display({ meals = [] }) {
  return (
    <main>
      <PageTitle>Welcome Home</PageTitle>
      <Link to={"admin"}>admin</Link>
      {meals.map((m) => {
        return (
          <div key={m.id}>
            <span>Nome: {m.nome}</span>
            <br />
            <span>Tipo: {m.tipo_refeicao}</span>
            <br />
            <span>Restaurante {m.restaurante}</span>
            <br />
            <span>Contém leite: {m.leite}</span>
            <br />
            <span>Contém cogumelo: {m.cogumelo}</span>
            <br />
            <span>Contém mel: {m.mel}</span>
            <br />
            <span>Contém oleaginosas: {m.oleaginosas}</span>
            <br />
            <span>Contém ovos: {m.ovos}</span>
            <br />
            <span>Contém pimenta: {m.pimenta}</span>
            <br />
            <span>Contém soja: {m.soja}</span>
            <br />
            <span>Contém suino: {m.suino}</span>
            <br />
            <span>Contém trigo: {m.trigo}</span>
            <br />
            <img width="100px" alt="Not Found" src={m.image} />
            <hr />
          </div>
        );
      })}
    </main>
  );
}
