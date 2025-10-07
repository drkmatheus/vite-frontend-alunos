import styled from "styled-components";

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
