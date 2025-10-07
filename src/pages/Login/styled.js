import styled from "styled-components";
import * as colors from "../../config/colors";

export const Form = styled.form`
  display: flex;
  max-width: 450px;
  flex-direction: column;
  margin-top: 1rem;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    padding-bottom: 0.8rem;
    margin: 0 auto;
    gap: 1rem;
  }

  input {
    padding: 0 1rem;
    max-width: 200px;
    height: 2.7rem;
    font-size: 1rem;
    margin-top: 0.8rem;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #ddd;

    &:focus {
      border: 1px solid ${colors.primaryColor};
      box-shadow: 0 0 0 1 rgba(0, 0, 0, 0.2);
    }
  }

  button {
    max-width: 6rem;
    align-self: center;
  }
`;
