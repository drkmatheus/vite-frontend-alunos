import React, { useEffect, useState } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { isEmail, isInt, isFloat } from "validator";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import axios from "../../services/axios";
import history from "../../services/history";
import * as actions from "../../store/modules/auth/actions";

export default function Aluno({ match }) {
  const id = get(match, "params.id", null);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
  }, [id]);

  const handleSubmit = async (e) => {
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

    if (!isInt(String(idade))) {
      toast.error("Idade inválida");
      formErrors = true;
    }

    if (!isFloat(String(altura))) {
      toast.error("Altura inválida");
      formErrors = true;
    }

    if (!isFloat(String(peso))) {
      toast.error("Peso inválido");
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          altura,
          peso,
        });
        toast.success("Dados editados e salvos");
        history.push("/");
      } else {
        await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          altura,
          peso,
        });
        toast.success("Dados salvos");
        history.push("/");
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, "response.status", "");
      const data = get(err, "response.data", {});
      const errors = get(data, "errors", []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error("Erro desconhecido");
      }

      if (status === 401) dispatch(actions.failureLogin);
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
          type="number"
          value={idade}
          placeholder="Digite a idade do aluno"
          onChange={(e) => setIdade(e.target.value)}
        />

        <label htmlFor="altura">Altura do aluno</label>
        <input
          type="text"
          value={altura}
          placeholder="Digite a altura do aluno"
          onChange={(e) => setAltura(e.target.value)}
        />

        <label htmlFor="peso">Peso do aluno</label>
        <input
          type="text"
          value={peso}
          placeholder="Digite o peso do aluno"
          onChange={(e) => setPeso(e.target.value)}
        />

        <button type="submit">{id ? "Salvar" : "Criar"}</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
