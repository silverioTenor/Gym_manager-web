import styled from 'styled-components';
import { transparentize } from 'polished';

import background from '../../../assets/sign-in-background.png';

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
  max-width: 800px;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  overflow: hidden;

  > button {
    display: flex;
    align-items: center;

    position: absolute;
    top: 18px;
    right: 24px;

    font-size: 14px;

    color: #aaa;
    background: transparent;

    svg {
      margin-right: 4px;
      font-size: 16px;
    }
  }

  form {
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 30px;
    }

    .gender {
      width: 100%;
      display: flex;
      flex-direction: column;
      place-items: start;

      > div {
        padding-top: 0;
      }

      div {
        padding: 4px;
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
        }
      }
    }

    button {
      margin-top: 24px;
    }
  }
`;

export const Instructor = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    width: 100%;
    margin-bottom: 30px;
    /* text-align: center; */
  }

  div:not(.skills) {
    width: 100%;
    padding: 16px 0;
    flex: 1;
    font-size: 16px;

    color: #f4ede8 !important;
    background: transparent;

    border-radius: 10px;
    border-bottom: 1px solid #1c1c1c;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      padding-left: 16px;
      background: #1c1c1c;
    }

    > span {
      margin-bottom: 4px;
      display: block;

      font-weight: bold;
      color: #f4ede8;
    }

    > span:nth-child(even) {
      font-weight: normal;
      font-size: 18px;
    }
  }

  .skills {
    margin-top: 12px;
  }

  button {
    margin-top: 24px;
    padding: initial;

    a {
      padding: 16px;
      display: block;
    }
  }
`;
