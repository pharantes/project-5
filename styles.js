import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0 0 5rem 0;
    font-family: system-ui;
    color: #101820;

  }
    h2 {
      padding: 0 0 0 2rem;
    }
`;
