import React, { useEffect, useState } from "react";
import { get } from "lodash";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Title, Form } from "./styled";
import axios from "../../services/axios";
import history from "../../services/history";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/actions";

export default function Pics({ match }) {
  const id = get(match, "params.id", "");

  const [isLoading, setIsLoading] = useState(false);
  const [pic, setPic] = useState("");

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const pic = e.target.files[0];
    const picUrl = URL.createObjectURL(pic);

    setPic(picUrl);

    const formData = new FormData();
    formData.append("aluno_id", id);
    formData.append("pic", pic);

    try {
      setIsLoading(true);
      await axios.post(`/pics/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Foto enviada");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, "response", "");
      toast.error("Erro ao enviar foto");

      if (status === 401) {
        dispatch(actions.failureLogin());
        history.push("/login");
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`alunos/${id}`);
        setPic(get(data, "Pics[0].url", ""));
        setIsLoading(false);
      } catch {
        toast.error("Erro ao obter imagem");
        setIsLoading(false);
        history.push("/");
      }
    };
    getData();
  }, [id]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Upload de imagem</Title>

      <Form>
        <label htmlFor="pic">
          {pic ? <img src={pic} alt="pic" /> : "Selecionar"}
          <input type="file" id="pic" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Pics.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
