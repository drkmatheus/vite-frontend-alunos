import styled from "styled-components";
import { Link } from "react-router-dom";

export const AlunosContainer = styled.div`
  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePic = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 1rem 0;
`;
