import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  padding: 16px 0;

  font-size: 16px;
  font-weight: 500;

  background: #ea3237;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#ea3237')};
  }
`;
