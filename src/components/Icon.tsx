import React from 'react';
import styled from "styled-components";

interface IconInterface {
    src: string
}

const StyledIcon = styled.div<IconInterface>`
  background: url("${props => props.src}");
  width: 40px;
  height: 40px;
  transition: 0.2s linear all;

  &:hover {
    background: url("${props => props.src.slice(0, props.src.length - 4) + '-hover.svg'}");
  }
`

const Icon: React.FC<IconInterface> = ({src}) => {
    return (
        <StyledIcon src={src}/>
    );
};

export default Icon;