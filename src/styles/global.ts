import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #292929;
    -webkit-font-smothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #f4ede8;
  }

  a, span, p {
    color: #f4ede8;
  }

  button {
    cursor: pointer;
  }

  .skills {
    span {
      padding: 4px 10px;
      color: #1c1c1c;
      background: #e8c02c;
      border-radius: 16px;

      & + span {
        margin-left: 8px;
      }
    }
  }
`;
