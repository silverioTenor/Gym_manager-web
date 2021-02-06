import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #666360;
  background: #1c1c1c;
  border: 2px solid #1c1c1c;
  border-radius: 10px;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #933bf4;
      border-color: #933bf4;
    `}

    ${props =>
    props.isFilled &&
    css`
      color: #933bf4;
    `}

  > svg {
    margin-right: 16px;
  }

  input {
    padding: 16px 0;
    flex: 1;
    font-size: 16px;
    color: #f4ede8 !important;
    background: transparent;

    &::placeholder {
      color: #666360;
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    color: #f4ede8;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
