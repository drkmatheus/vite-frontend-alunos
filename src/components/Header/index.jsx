import React from "react";

import { FaHome, FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav } from "./styled";

export default function Header() {
  const botaoClicado = useSelector(
    (state) => state.exampleReducer.botaoClicado
  );
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="/logout">
        <FaUser size={24} />
      </Link>
      <p>{botaoClicado ? "Clicado" : "Não clicado"}</p>
    </Nav>
  );
}
