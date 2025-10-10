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
