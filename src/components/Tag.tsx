import React from 'react';
import styled from "styled-components";
import {colors} from "../styles/variables";

interface TagInterface {
    // title: string
}

const StyledTag = styled.div<TagInterface>`
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
`

const Tag: React.FC<TagInterface> = ({children}) => {
    return (
        <StyledTag>{children}</StyledTag>
    );
};

export default Tag;