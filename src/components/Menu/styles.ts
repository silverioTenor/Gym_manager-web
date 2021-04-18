import styled, { css, keyframes } from 'styled-components';

interface ToggleButtonProps {
  isMenuActive: boolean;
}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-230px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-230px);
  }
`;

export const Container = styled.div<ToggleButtonProps>`
  width: 100%;
  max-width: 230px;
  height: 100vh;
  padding: 20px 0;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background: #1c1c1c;

  ${props =>
    !props.isMenuActive &&
    css`
      animation: ${appearFromRight} 1s forwards;
    `};

  ${props =>
    props.isMenuActive &&
    css`
      animation: ${appearFromLeft} 1s forwards;
    `};

  img {
    width: 200px;
    margin: 0 auto;
    object-fit: contain;
  }

  aside {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      padding: 20px 0;

      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.5px;

      transition: background 0.2s;

      &:hover {
        background: #933bf4;
      }

      form button {
        background: transparent;

        svg {
          color: #f4ede8;
          font-weight: bold;
          font-size: 22px;
        }
      }
    }
  }
`;

const appearFromLeftTwo = keyframes`
  from {
    left: 20px;
  }
  to {
    left: 240px;
  }
`;

const appearFromRightTwo = keyframes`
  from {
    left: 240px;
  }
  to {
    left: 20px;
  }
`;

export const ToggleButton = styled.div<ToggleButtonProps>`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  left: 20px;

  ${props =>
    !props.isMenuActive &&
    css`
      animation: ${appearFromRightTwo} 1s forwards;
    `}

  ${props =>
    props.isMenuActive &&
    css`
      animation: ${appearFromLeftTwo} 1s forwards;
    `}

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f4ede8;
  background: #666360;
  border-radius: 50%;
`;
