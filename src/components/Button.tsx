import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const StyledButton = styled.button`
  width: 360px;
  height: 60px;
  background-color: ${colors.primaryLight};
  border-radius: 0.5rem;
  border: none;
  transition: 0.2s linear all;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.primary};
  }
`;

const Button: React.FC = ({
  children,
}) => (
  <StyledButton>
    {children}
  </StyledButton>
);

export default Button;
