import React, { useState } from "react";
import * as actions from "../../store/modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Form } from "./styled";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const prevPath = get(props, "location.state.prevPath", "/");
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Email inválido");
    }

    if (password.length < 3 || password.length > 30) {
      formErrors = true;
      toast.error("Senha inválida");
    }

    if (formErrors) return;

    dispatch(actions.requestLogin({ email, password, prevPath }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email{" "}
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha{" "}
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
