import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

interface AuthButtonInterface {
    children: ReactElement
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<AuthButtonInterface>`
    width: 100%;
    height: 40px;
    background-color: ${colors.primaryLight};
    border-radius: 0.3rem;
    border: none;
    transition: 0.2s linear all;

    &:hover,
    &:focus {
        background-color: ${colors.primary};
    }
`;

const AuthButton: React.FC<AuthButtonInterface> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default AuthButton;
