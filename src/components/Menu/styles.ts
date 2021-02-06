import styled, { css } from 'styled-components';

interface ToggleButtonProps {
  isMenuActive: boolean;
}

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

  opacity: 0;
  visibility: hidden;

  ${props =>
    props.isMenuActive &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  img {
    height: 150px;
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
    }
  }
`;

export const ToggleButton = styled.div<ToggleButtonProps>`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 20px;

  ${props =>
    props.isMenuActive &&
    css`
      left: 240px;
    `}

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f4ede8;
  background: #666360;
  border-radius: 50%;
`;
