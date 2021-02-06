import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pad?: string;
  size?: string;
  background?: string;
}

const Button: React.FC<ButtonProps> = ({
  pad = '16px',
  size = '16px',
  background = '#933bf4',
  children,
  ...rest
}) => (
  <Container type="button" pad={pad} size={size} background={background} {...rest}>
    {children}
  </Container>
);

export default Button;
