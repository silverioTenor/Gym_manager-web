import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    padding: 8px;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #312e38;
    background: #c53030;
    border-radius: 4px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
