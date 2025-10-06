import {
  CLICK_BUTTON_SUCCESS,
  CLICK_BUTTON_REQUEST,
  CLICK_BUTTON_FAILURE,
} from "../types";

const initialState = {
  botaoClicado: false,
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_BUTTON_SUCCESS: {
      console.log("Sucesso");
      return { ...state, botaoClicado: !state.botaoClicado };
    }
    case CLICK_BUTTON_REQUEST: {
      console.log("Requisição iniciada");
      return state;
    }
    case CLICK_BUTTON_FAILURE: {
      console.log("Requisição rejeitada");
      return state;
    }
    default:
      return state;
  }
}
