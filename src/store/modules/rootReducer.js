import { combineReducers } from "redux";

import exampleReducer from "./example/reducer";

const rootReducer = combineReducers({
  exampleReducer,
});

export default rootReducer;
