import * as actionType from "../types";

export function requestButton() {
  return {
    type: actionType.CLICK_BUTTON_REQUEST,
  };
}
export function successButton() {
  return {
    type: actionType.CLICK_BUTTON_SUCCESS,
  };
}
export function failureButton() {
  return {
    type: actionType.CLICK_BUTTON_FAILURE,
  };
}
