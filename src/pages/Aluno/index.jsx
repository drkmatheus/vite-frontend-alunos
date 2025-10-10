import React, { useEffect, useState } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import Loading from "../../components/Loading";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import axios from "../../services/axios";
import history from "../../services/history";

export default function Aluno({ match }) {
  const id = get(match, "params.id", null);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const pic = get(data, "Pics[0].url", "");

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setAltura(data.altura);
        setPeso(data.peso);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, "response.status", "");
        const errors = get(err, "response.data.errors", []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push("/");
      }
    }
    getData();
  }, []);

  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  const handleNumericInput = (value, setter) => {
    if (value === "" || isNumeric(value)) {
      setter(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 30) {
      toast.error("Nome inválido");
      formErrors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length > 30) {
      toast.error("Sobrenome inválido");
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error("Email inválido");
      formErrors = true;
    }

    if (!idade || isNumeric(idade)) {
      toast.error("Idade inválida");
      formErrors = true;
    }

    if (!altura || isNumeric(altura)) {
      toast.error("Altura inválida");
      formErrors = true;
    }

    if (!peso || isNumeric(peso)) {
      toast.error("Peso inválido");
      formErrors = true;
    }

    if (!formErrors) {
      toast.success("Formulário salvo");
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? "Editar aluno" : "Novo aluno"}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome do aluno</label>
        <input
          type="text"
          value={nome}
          placeholder="Digite o nome do aluno"
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="sobrenome">Sobrenome do aluno</label>
        <input
          type="text"
          value={sobrenome}
          placeholder="Digite o sobrenome do aluno"
          onChange={(e) => setSobrenome(e.target.value)}
        />

        <label htmlFor="email">Email do aluno</label>
        <input
          type="email"
          value={email}
          placeholder="Digite o email do aluno"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="idade">Idade do aluno</label>
        <input
          type="text"
          value={idade}
          placeholder="Digite a idade do aluno"
          onChange={(e) => handleNumericInput(e.target.value, setIdade)}
        />

        <label htmlFor="altura">Altura do aluno</label>
        <input
          type="text"
          value={altura}
          placeholder="Digite a altura do aluno"
          onChange={(e) => handleNumericInput(e.target.value, setAltura)}
        />

        <label htmlFor="peso">Peso do aluno</label>
        <input
          type="text"
          value={peso}
          placeholder="Digite o peso do aluno"
          onChange={(e) => handleNumericInput(e.target.value, setPeso)}
        />

        <button type="submit">{id ? "Salvar" : "Criar"}</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
