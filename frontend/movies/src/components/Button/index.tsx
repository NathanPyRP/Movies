import React from 'react';
import { ButtonWrapper } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
