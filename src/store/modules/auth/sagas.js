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

function registerRequest({ payload }) {
  console.log(payload);
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
