import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/actions";

import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Form } from "./styled";

export default function Register() {
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

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
    if (!id && (password.length < 3 || password.length > 30)) {
      formErrors = true;
      toast.error("Senha inválida");
    }

    if (formErrors) return;

    dispatch(actions.requestRegister({ nome, email, password, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? "Editar dados" : "Criar conta"}</h1>
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
        <button type="submit">{id ? "Salvar" : "Criar conta"}</button>
      </Form>
    </Container>
  );
}
