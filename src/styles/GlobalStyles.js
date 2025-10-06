import { styled, createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";
import "react-toastify/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: #fff;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: 300ms ease-in;
  }

  button:hover {
    background: ${colors.primaryDarkColor};
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success .Toastify__progress-bar {
    background-color: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error .Toastify__progress-bar {
    background-color: ${colors.errorColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--warn .Toastify__progress-bar {
    background-color: ${colors.warnColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--info .Toastify__progress-bar {
    background-color: ${colors.infoColor};
  }
`;

export const Container = styled.section`
  max-width: 60rem;
  background: #ccc;
  margin: 5rem auto;
  padding: 3rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
