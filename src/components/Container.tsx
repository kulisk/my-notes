import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1500px;
  height: 100%;
`

const Container: React.FC = (props) => {
    return <StyledContainer {...props}/>
};

export default Container;