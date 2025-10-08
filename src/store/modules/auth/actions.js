import * as actionType from "../types";

export function requestLogin(payload) {
  return {
    type: actionType.LOGIN_REQUEST,
    payload,
  };
}
export function successLogin(payload) {
  return {
    type: actionType.LOGIN_SUCCESS,
    payload,
  };
}
export function failureLogin(payload) {
  return {
    type: actionType.LOGIN_FAILURE,
    payload,
  };
}

export function requestRegister(payload) {
  return {
    type: actionType.REGISTER_REQUEST,
    payload,
  };
}
