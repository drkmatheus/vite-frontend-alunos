import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: "Alunos-API",
      storage,
      whitelist: ["auth"],
    },
    reducers
  );

  return persistedReducers;
};
