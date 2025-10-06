import { call, put, takeLatest, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as types from "../types";
import * as actions from "./actions";

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.successButton());
  } catch {
    toast.error("An error occurred while processing your request");
    yield put(actions.failureButton());
  }
}

export default all([takeLatest(types.CLICK_BUTTON_REQUEST, exampleRequest)]);
