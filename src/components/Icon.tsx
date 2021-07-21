import React from 'react';
import styled from "styled-components";

interface IconInterface {
    src: string,
    width?: string
    height?: string
    isTurned?: boolean
    className?: string
    notHover?: boolean
}

const StyledIcon = styled.div<IconInterface>`
  background: url("${props => props.src}");
  width: ${props => props.width ? props.width + 'px' : '30px'};
  height: ${props => props.height ? props.height + 'px' : '30px'};
  transition: 0.2s linear all;
  transform: ${props => props.isTurned ? 'rotate(45deg)' : 'none'};


  &:hover {
    background: url("${props => !props.notHover
            ? props.src.slice(0, props.src.length - 4) + '-hover.svg'
            : props.src}");
  }
`

const Icon: React.FC<IconInterface> =
    ({
         src,
         width,
         height,
         isTurned,
         className,
         notHover
     }) => {
        return (
            <StyledIcon src={src}
                        width={width}
                        height={height}
                        isTurned={isTurned}
                        className={className}
                        notHover={notHover}
            />
        );
    };

export default Icon;