import { call, put, takeLatest, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as types from "../types";
import * as actions from "./actions";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { get } from "lodash";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/tokens", payload);
    yield put(actions.successLogin({ ...response.data }));

    toast.success("Login realizado");

    axios.defaults.headers.Authorization = `Bearer ${response.data.tokenJwt}`;
    history.push(payload.prevPath);
  } catch (e) {
    console.log(e);
    toast.error("Usuário ou senha inválidos");
    yield put(actions.failureLogin());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, "/users", {
        email,
        nome,
        password: password || undefined,
      });
      toast.success("Dados atualizados, logue novamente");
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
      history.push("/login");
    } else {
      yield call(axios.post, "/users", {
        nome,
        email,
        password,
      });
      toast.success("Conta criada");
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      history.push("/login");
    }
  } catch (e) {
    const errors = get(e, "response.data.error", []);
    const status = get(e, "response.status", "");

    if (status === 401) {
      toast.error("Faça login novamente");
      yield put(actions.failureLogin());
      return history.push("/login");
    }

    if (errors.lenght > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error("Erro desconhecido");
    }
    console.log(e);

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
