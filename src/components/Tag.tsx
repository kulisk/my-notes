import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const StyledTag = styled.span`
  background-color: ${colors.primary};
  height: 30px;
  padding: 0.3rem 0 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.white};
  border-radius: 1.5rem;
  margin-left: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  width: 100px;
  text-align: center;
`;

const Tag: React.FC = ({ children }) => <StyledTag>{children}</StyledTag>;

export default Tag;
