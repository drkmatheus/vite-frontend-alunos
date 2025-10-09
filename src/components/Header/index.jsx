import React from "react";

import { FaHome, FaSignInAlt, FaUser, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

import * as actions from "../../store/modules/auth/actions";
import history from "../../services/history";
import { Nav } from "./styled";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const loggedUser = useSelector((state) => state.auth.user?.nome);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.failureLogin());
    history.push("/");
  };

  return (
    <Nav>
      <div></div>
      <div>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/register">
          <FaSignInAlt size={24} />
        </Link>
        {loggedUser ? (
          <Link onClick={handleLogout}>
            <FaPowerOff size={24} />
          </Link>
        ) : (
          <Link to="/login">
            <FaUser size={24} />
          </Link>
        )}
      </div>
      {loggedUser ? (
        <span>Logado como: {loggedUser}</span>
      ) : (
        <span>Faça login para editar registros</span>
      )}
    </Nav>
  );
}
