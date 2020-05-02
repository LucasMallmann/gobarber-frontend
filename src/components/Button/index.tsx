import React from 'react';

import { Container } from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => (
  <Container {...rest} type={type || 'button'}>
    {children}
  </Container>
);

export default Button;
