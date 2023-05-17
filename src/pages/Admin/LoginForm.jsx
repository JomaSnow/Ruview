import React from "react";
import { PageTitle, Main, LoginArea, Form, Row, ErrorMessage } from "./styles";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { ClipLoader } from "react-spinners";
import { colors } from "../../util/design";

export default function Display({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  handleSubmit = () => {},
  errorMessage,
}) {
  return (
    <Main $center>
      <LoginArea>
        <PageTitle>Admin Login</PageTitle>
        <Form>
          <TextInput
            type="email"
            placeholder="E-mail"
            value={email}
            setValue={setEmail}
          />
          <TextInput
            type="password"
            placeholder="Senha"
            value={password}
            setValue={setPassword}
          />
          <Row padding="0 10% 0 0">
            <Button
              type="submit"
              text="Entrar"
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            />
            {!loading && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {loading && <ClipLoader color={colors.accent} />}
          </Row>
        </Form>
      </LoginArea>
    </Main>
  );
}
