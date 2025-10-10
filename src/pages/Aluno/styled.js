import styled from "styled-components";
import * as colors from "../../config/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin: 1rem 0;
  }

  input {
    padding: 0.7rem 0.2rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 2px solid #ddd;
  }

  input:focus {
    border: 2px solid ${colors.primaryColor};
  }

  button {
    margin: 0.7rem 0 0 0;
  }
`;

export const ProfilePic = styled.div`
  display: flex;

  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 1rem;

  img {
    width: 190px;
    height: 190px;
    border-radius: 5%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    margin-left: 11rem;
    border-radius: 50%;
  }
`;
