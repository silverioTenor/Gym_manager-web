import styled from 'styled-components';
import { transparentize } from 'polished';

import background from '../../assets/sign-in-background.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    background: ${transparentize(0.3, '#1c1c1c')};

    img {
      width: 250px;
      margin-bottom: 36px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  overflow: hidden;

  form {
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 30px;
    }

    button {
      margin-top: 24px;
    }
  }
`;
