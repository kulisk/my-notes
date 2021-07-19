import React from 'react';
import styled from "styled-components";
import {colors} from "../styles/variables";

interface ContentHeaderInterface {

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
`

const ContentHeader:React.FC<ContentHeaderInterface> =
    ({
        children
     }) => {
    return (
        <StyledContentHeader>
            {children}
        </StyledContentHeader>
    );
};

export default ContentHeader;