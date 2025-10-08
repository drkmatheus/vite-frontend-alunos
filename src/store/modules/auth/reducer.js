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
      console.log("REDUCER", action.payload);
      return state;
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

      return newState;
    }

    default:
      return state;
  }
}
