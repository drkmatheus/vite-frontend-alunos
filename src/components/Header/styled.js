import styled from "styled-components";

import { primaryColor, primaryDarkColor } from "../../config/colors";

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: ${primaryDarkColor};
    font-weight: bold;
    margin: 0 0.7rem 0;
  }
`;
