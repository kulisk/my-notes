import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader';
import Heading from '../components/Heading';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { colors } from '../styles/variables';
import { onChangeHandler, onTextareaChange } from '../shared';
import FileInput from '../components/FileInput';
import Tag from '../components/Tag';
import { create } from '../reducers/NoteReducer';
import { NoteInterface } from '../components/Note';
import { HOME_ROUTE } from '../const/routes';
import { createNote } from '../http';
import { socket } from '../websocket';
import { CREATE } from '../const/websocket-events';

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  function addTag(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    if (key !== 'Enter' || tag === '') {
      return;
    }
    event.preventDefault();
    setTags((oldTags) => [...oldTags, tag]);
    setTag('');
  }

  function onCreateClick() {
    const postData = new FormData();
    if (files !== null) {
      const filesArray = Array.prototype.slice.call(files);
      filesArray.forEach((value) => {
        postData.append('files', value);
      });
    }
    postData.append('title', title);

    postData.append('content', content);
    postData.append('tags', JSON.stringify(tags));
    createNote(postData)
      .then((response) => {
        const newNote: NoteInterface = {
          id: response.data.id,
          tags,
          title,
          content,
        };
        socket.emit(CREATE, { note: newNote });
        history.push(HOME_ROUTE);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="customContainer">
      <ContentHeader
        style={{ justifyContent: 'center', marginBottom: '7rem' }}
      >
        <Heading>Creating</Heading>
      </ContentHeader>
      <div className="notesFormContainer">
        <RegularText color={colors.primary}>Note title</RegularText>
        <TextInput
          type="text"
          style={{ marginBottom: '7rem' }}
          onChange={(event) => onChangeHandler(event, setTitle)}
        />

        <RegularText color={colors.primary}>Tags</RegularText>
        <div className="tagsContainer">
          {tags.map((value) => (
            <Tag key={value}>{value}</Tag>
          ))}
        </div>
        <TextInput
          type="text"
          style={{ marginBottom: '6rem' }}
          value={tag}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => addTag(event)}
          onChange={(event) => onChangeHandler(event, setTag)}
        />

        <RegularText color={colors.primary}>
          Images: PNG, JPG, JPEG
        </RegularText>
        <FileInput
          files={files}
          onChange={(event) => setFiles(event.target.files)}
        />

        <RegularText color={colors.primary}>Note content</RegularText>
        <TextArea
          style={{ marginBottom: '7rem' }}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onTextareaChange(event, setContent)}
        />

        <div
          className="d-flex justify-content-end"
          style={{ marginBottom: '7rem' }}
        >
          <Button onClick={() => onCreateClick()}>
            <Heading>Create</Heading>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Create;
