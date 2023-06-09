import React from "react";
import { Main, PageTitle, Paragraph } from "./styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Display() {
  return (
    <>
      <Navbar currentPage={1} />
      <Main>
        <PageTitle>Sobre</PageTitle>
        <Paragraph>
          Ruview é parte de um trabalho de conclusão de curso para o curso de
          Ciência da Computação pela Universidade de Brasília (UnB). O objetivo
          maior do trabalho em questão é aprimorar conhecimento em cima da
          tecnologia Solid criada por Sir Time Bernes-Lee, o inventor da World
          Wide Web, com a meta de trazer esta tecnologia para o dia-a-dia de
          estudantes e professores da UnB. Para tanto, estão sendo desenvolvidos
          diversos outros trabalhos com o objetivo comum de aprimorar o
          smartUnB.ECOS, um ecossistema social para os alunos de computação da
          UnB idealizado pela Professor Germana Menezes da Nóbrega, orientadora
          deste trabalho.
        </Paragraph>
        <Paragraph>
          O objetivo principal do Ruview não é necessariamente fazer parte deste
          ecossistema, mas sim mostrar como uma aplicação voltada para o meio
          educacional poderia implementar a tecnologia Solid na raíz de seu
          funcionamento, visando principalmente fazer uso da característica de
          interopreabilidade da tecnologia. Isso é alcançado completamente
          quando acrescentamos na equação um segundo projeto que faz parte deste
          mesmo trabalho, uma aplicação de agendamento e monitoria de estudantes
          que faz uso da interação do aluno neste projeto para influenciar o
          segundo, sem nenhum compartilhamento de dados por parte das aplicações
          envolvidas.
        </Paragraph>

        <Paragraph>
          Quanto a esta aplicação em específico, ela consiste em um site que
          permite alunos da UnB visualizarem o cardápio da semana e avaliar os
          pratos de cada dia, podendo revelar intenção de comer no Restaurante
          Universitário naquele dia, além do aspecto social de poder ver quais
          pratos seus colegas gostam ou não. Os dados de avaliação de cada prato
          são armazenados nos PODs individuais de cada aluno para que outras
          aplicações tenham acesso a estes dados, caso desejem e o aluno
          permita. Os dados referentes aos pratos de cada semana são armazenados
          de forma centralizada (i.e. não fazem uso do Solid) na nuvem,
          hospedados e servidos pelo Firebase, um sistema de gerenciamento de
          dados da Google. Estes dados podem ser acessados e modificados através
          de uma interface de administrador.
        </Paragraph>

        <Paragraph>
          Para utilizar o Ruview no total de sua capacidade, o usuário precisa
          ter acesso a um POD, seja um próprio ou algum outro hospedado
          gratuitamente em provedores como https://inrupt.net ou
          https://solidcommunity.net.
        </Paragraph>
      </Main>
      <Footer />
    </>
  );
}
