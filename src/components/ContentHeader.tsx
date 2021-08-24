import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../styles/variables';

interface ContentHeaderInterface {
    style?: React.CSSProperties
}

const StyledContentHeader = styled.div<ContentHeaderInterface>`
    width: 100%;
    height: 80px;
    background-color: ${colors.primary};
    display: flex;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding: 0 4rem;
  
  @media (max-width: ${breakpoints.s}) {
    padding: 0 2rem;
    border-radius: 0;
  }
`;

const ContentHeader: React.FC<ContentHeaderInterface> = ({
  children,
  style,
}) => <StyledContentHeader style={style}>{children}</StyledContentHeader>;

export default ContentHeader;
