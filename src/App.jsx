import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";
import { persistor } from "./store";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import history from "./services/history";

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </PersistGate>
  );
}

export default App;
