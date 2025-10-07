import { call, put, takeLatest, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as types from "../types";
import * as actions from "./actions";

function* loginRequest(payload) {
  yield console.log("Saga: ", payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
