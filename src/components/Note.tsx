import React from 'react';
import styled from "styled-components";
import Icon from "./Icon";
import {colors} from "../styles/variables";
import Heading from "./Heading";
import Tag from "./Tag";

interface NoteInterface {
    isPinned?: boolean,
    title?: string
    tags?: Array<string>
}

const StyledNote = styled.div<NoteInterface>`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  background-color: ${props => props.isPinned === true ? colors.secondary : colors.white};
  border-left: 1px solid ${colors.primary};
  border-right: 1px solid ${colors.primary};
  border-bottom: 1px solid ${colors.primary};
  transition: 0.2s linear all;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.5rem 0.2rem ${colors.primary};
    position: relative;
  }
`

const Note: React.FC<NoteInterface> = ({isPinned, title, tags}) => {
    return (
        <StyledNote isPinned={isPinned}>
            <Icon src={'./icons/pin.svg'}
                  isTurned={isPinned}
            />
            <Heading color={colors.primary} className={'ms-5'}>{title}</Heading>
            <div className={'d-flex justify-content-end flex-grow-1'}>
                {
                    tags?.map((item, index) => <Tag key={index}>{item}</Tag>)
                }
                <Icon src={'./icons/rubbish.svg'} className={'ms-3'}/>
                <Icon src={'./icons/copy.svg'} className={'ms-3'}/>
            </div>
        </StyledNote>
    );
};

export default Note;