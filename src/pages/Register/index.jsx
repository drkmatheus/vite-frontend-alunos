import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import axios from "../../services/axios";
import history from "../../services/history";
import { get } from "lodash";

import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Form } from "./styled";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    toast.dismiss();
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 30) {
      formErrors = true;
      toast.error("Nome inválido");
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Email inválido");
    }
    if (password.length < 3 || password.length > 30) {
      formErrors = true;
      toast.error("Senha inválida");
    }

    if (formErrors) return;

    setIsLoading(true);

    try {
      await axios.post("/users/", { nome, email, password });
      toast.success("Cadastro realizado");
      setIsLoading(false);
      history.push("/login");
    } catch (e) {
      const errors = get(e, "response.data.errors", []);

      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />;<h1>Criar conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome{" "}
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          E-mail{" "}
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Senha{" "}
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Criar conta</button>
      </Form>
    </Container>
  );
}
