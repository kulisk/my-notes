import React from 'react';
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
`

const Heading: React.FC = (props) => {
    return <StyledHeading {...props}/>
};

export default Heading;