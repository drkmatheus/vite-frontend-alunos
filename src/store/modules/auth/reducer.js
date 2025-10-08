import * as types from "../types";

const initialState = {
  isLogged: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_SUCCESS: {
      const newState = { ...state };

      newState.isLogged = true;
      newState.token = action.payload.tokenJwt;
      newState.user = action.payload.user;
      newState.isLoading = false;

      return newState;
    }

    default:
      return state;
  }
}
