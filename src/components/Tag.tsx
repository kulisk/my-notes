import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const StyledTag = styled.div`
  background-color: ${colors.primary};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.white};
  border-radius: 1.5rem;
  margin-left: 3rem;
`;

const Tag: React.FC = ({ children }) => (
  <StyledTag>{children}</StyledTag>
);

export default Tag;
