import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Icon from './Icon';
import { breakpoints, colors } from '../styles/variables';
import Tag from './Tag';
import { EDIT_ROUTE } from '../const/routes';
import { copyNote, deleteNote, updateNote } from '../http';
import { RootState } from '../reducers/store';
import RegularText from './RegularText';
import { StyledConfirmAlert } from '../styles/ConfitmAlertStyle';
import { TAGS_COUNT_IN_PREVIEW } from '../const/numbers';
import { socket } from '../websocket';
import { COPY, PIN, REMOVE } from '../const/websocket-events';

export interface NoteInterface {
    id: number
    isPinned?: boolean
    title: string
    tags: string[]
    content: string
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

  @media (max-width: ${breakpoints.s}) {
    padding: 0 2rem;
  }

  &:hover {
    box-shadow: 0 0 0.5rem 0.2rem ${colors.primary};
    position: relative;
  }

  .notePreview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .noteTitle {
    font-size: 4rem;
    font-weight: 700;
    color: ${colors.primary};
    white-space: nowrap;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: ${breakpoints.xs}) {
      font-size: 2.4rem;
    }

    @media (max-width: ${breakpoints.xxs}) {
      max-width: 150px;
    }
  }

  .tagsWrapper {
    display: flex;
    @media (max-width: ${breakpoints.s}) {
      display: none;
    }
  }
`;

const Note: React.FC<NoteInterface> = ({
  isPinned, title, tags, id,
}) => {
  const note = useSelector(
    (state: RootState) => state.notes.notes.filter((element) => element.id === +id)[0],
  );

  function onDeleteClick() {
    deleteNote(id)
      .then(() => {
        socket.emit(REMOVE, { id });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const removeAlert = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <StyledConfirmAlert>
          <div className="titleContainer">
            <RegularText color="#fff">Delete note?</RegularText>
          </div>
          <div className="buttonsContainer">
            <button
              onClick={() => {
                onDeleteClick();
                onClose();
              }}
              type="button"
            >
              Yes
            </button>
            <button onClick={onClose} type="button">No</button>
          </div>

        </StyledConfirmAlert>
      ),
    });
  };

  function onPinClick() {
    const updateData = new FormData();
    updateData.append('isPinned', JSON.stringify(!note.isPinned));
    updateNote(id.toString(), updateData)
      .then(() => {
        socket.emit(PIN, { id });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function onCopyClick() {
    copyNote(id)
      .then((res) => {
        const duplicate: NoteInterface = res.data;
        duplicate.tags = JSON.parse(res.data.tags);
        socket.emit(COPY, { id, duplicate });
      })
      .catch((e) => {
        console.log(e);
      });
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
        <div className="notePreview">
          <span className="ms-5 noteTitle">
            {title}
          </span>
          <div className="tagsWrapper">
            {tags.length !== 0
                        && tags.map((item, index) => (index < TAGS_COUNT_IN_PREVIEW
                          ? <Tag key={item}>{item}</Tag> : null))}
          </div>
        </div>
      </NavLink>
      <div className="d-flex justify-content-end flex-grow-1">
        <Icon
          src="/icons/rubbish.svg"
          className="ms-3"
          onClick={() => removeAlert()}
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
