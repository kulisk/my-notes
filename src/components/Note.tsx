import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Icon from './Icon';
import { colors } from '../styles/variables';
import Heading from './Heading';
import Tag from './Tag';
import { EDIT_ROUTE } from '../const/routes';
import { copy, pin, remove } from '../reducers/NoteReducer';

export interface NoteInterface {
    id: number
    isPinned?: boolean,
    title?: string
    tags?: Array<string>
    content?: string
}

interface NoteStyle {
    isPinned?: boolean
}

const StyledNote = styled.div<NoteStyle>`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  background-color: ${(props) => (props.isPinned === true ? colors.secondary : colors.white)};
  border-left: 1px solid ${colors.primary};
  border-right: 1px solid ${colors.primary};
  border-bottom: 1px solid ${colors.primary};
  transition: 0.2s linear all;

  &:hover {
    box-shadow: 0 0 0.5rem 0.2rem ${colors.primary};
    position: relative;
  }

  .tagsWrapper {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }
`;

const Note: React.FC<NoteInterface> = ({
  isPinned,
  title,
  tags,
  id,
}) => {
  const dispatch = useDispatch();

  function onDeleteClick() {
    dispatch(remove(id));
  }

  function onPinClick() {
    dispatch(pin(id));
  }

  function onCopyClick() {
    dispatch(copy(id));
  }

  return (
    <StyledNote isPinned={isPinned}>
      <div className="pinWrapper">
        <Icon
          src="/icons/pin.svg"
          isTurned={isPinned}
          onClick={() => onPinClick()}
        />
      </div>
      <NavLink
        to={`${EDIT_ROUTE}/${id}`}
        className="d-flex align-items-center"
        style={{
          height: 'inherit',
          width: '100%',
        }}
      >
        <Heading color={colors.primary} className="ms-5">{title}</Heading>
        <div className="tagsWrapper">
          {
                            tags?.map((item) => <Tag key={item}>{item}</Tag>)
                        }
        </div>
      </NavLink>
      <div className="d-flex justify-content-end flex-grow-1">
        <Icon
          src="/icons/rubbish.svg"
          className="ms-3"
          onClick={() => onDeleteClick()}
        />
        <Icon
          src="/icons/copy.svg"
          className="ms-3"
          onClick={() => onCopyClick()}
        />
      </div>
    </StyledNote>
  );
};

export default Note;