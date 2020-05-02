import React from 'react';

import { Container } from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest} type="button">
    {children}
  </Container>
);

export default Button;
