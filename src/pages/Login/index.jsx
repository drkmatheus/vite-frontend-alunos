import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragraph } from "./styled";
import * as exampleActions from "../../store/modules/example/actions";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.requestButton());
  }

  return (
    <Container>
      <Title>
        Login
        <span>Only for testing purpose</span>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas.
      </Paragraph>
      <button onClick={handleClick}>Enviar</button>
    </Container>
  );
}
