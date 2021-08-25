import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

interface HeadingInterface {
    color?: string
    className?: string
}

const StyledHeading = styled.h1<HeadingInterface>`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => (props.color ? props.color : colors.white)};
  white-space: nowrap;
`;

const Heading: React.FC<HeadingInterface> = ({
  children,
  color,
  className,
}) => (
  <StyledHeading color={color} className={className}>
    {children}
  </StyledHeading>
);

export default Heading;
