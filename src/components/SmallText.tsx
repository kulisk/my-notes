import React from 'react';
import styled from 'styled-components';

interface SmallTextInterface {
    color: string
}

const StyledSmallText = styled.span<SmallTextInterface>`
    color: ${(props) => props.color};
    font-size: 1.8rem;
    font-weight: 400;
`;

const SmallText: React.FC<SmallTextInterface> = ({ children, color }) => (
  <StyledSmallText color={color}>{children}</StyledSmallText>
);

export default SmallText;
