import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  display: block;
`;

export const Form = styled.form`
  input {
    display: none;
  }

  label {
    display: flex;
    height: 190px;
    width: 190px;
    justify-content: center;
    align-items: center;
    border: 4px dashed ${colors.primaryColor};
    border-radius: 50%;
    cursor: pointer;
    background: #eee;
    margin: 30px auto;
    overflow: hidden;
  }

  img {
    height: 190px;
    width: 190px;
  }
`;
