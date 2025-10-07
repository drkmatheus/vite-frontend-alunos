import styled from "styled-components";
import * as colors from "../../config/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;
  }

  input {
    padding: 0 1rem;
    height: 2.7rem;
    font-size: 1rem;
    margin-top: 0.8rem;
    border-radius: 5px;
    border: 1px solid #ddd;

    &:focus {
      border: 1px solid ${colors.primaryColor};
      box-shadow: 0 0 0 1 rgba(0, 0, 0, 0.2);
    }
  }
`;
