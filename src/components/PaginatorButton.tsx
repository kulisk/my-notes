import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

interface PaginatorButtonInterface {
    className?: string
}

const StyledPaginatorButton = styled.div<PaginatorButtonInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 107px;
  height: 80px;
  border: 0.1rem solid ${colors.primary};
  border-radius: 0.3rem;
  transition: 0.2s linear all;
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-right: 1rem;
  
  &:last-child{
    margin-right: 0;
  }
  &:hover {
    background-color: ${colors.primaryLight};
  }
`;

const PaginatorButton: React.FC<PaginatorButtonInterface> = ({
  children,
  className,
}) => (
  <StyledPaginatorButton className={className}>
    {children}
  </StyledPaginatorButton>
);

export default PaginatorButton;
