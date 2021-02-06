import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  pad: string;
  size: string;
  background: string;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;

  ${props => css`
    padding: ${props.pad};
    font-size: ${props.size};
    background: ${props.background};
    border: 2px solid ${props.background};
  `}

  font-weight: 500;
  letter-spacing: 0.5px;

  color: #f4ede8;

  border-radius: 10px;
  transition: background 0.2s;

  &:hover {
    ${props => css`
      background: ${shade(0.2, `${props.background}`)};
      border-color: ${shade(0.2, `${props.background}`)};
    `}
  }
`;
