import React from 'react';
import styled from 'styled-components';

interface RegularTextInterface {
    color: string
    style?: React.CSSProperties
}

const StyledRegularText = styled.span`
  font-weight: 500;
  font-size: 2.4rem;
  color: ${(props) => props.color};
`;

const RegularText: React.FC<RegularTextInterface> = ({
  color,
  children,
  style,
}) => (
  <StyledRegularText color={color} style={style}>
    {children}
  </StyledRegularText>
);

export default RegularText;
