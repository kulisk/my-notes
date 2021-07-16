import React from 'react';
import styled from "styled-components";

interface RegularTextInterface {
    color: string
}

const StyledRegularText = styled.span`
  font-weight: 500;
  font-size: 2.4rem;
  color: ${props => props.color};
`

const RegularText: React.FC<RegularTextInterface> = ({color, children}) => {
    return (
        <StyledRegularText color={color}>
            {children}
        </StyledRegularText>
    );
};

export default RegularText;