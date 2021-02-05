import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #9c9c9c;
  background: #1c1c1c;
  border: 2px solid #1c1c1c;
  border-radius: 6px;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ea3237;
      border-color: #ea3237;
    `}

  input {
    padding: 18px 0;
    flex: 1;
    font-size: 16px;
    color: #f4ede8 !important;
    background: transparent;

    &::placeholder {
      color: #9c9c9c;
    }

    /* Change Autocomplete styles in Chrome */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: none;
      -webkit-text-fill-color: #f4ede8;
      box-shadow: 0 0 0px 1000px #1c1c1c inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;
