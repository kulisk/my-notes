import React, { ChangeEvent, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader';
import Heading from '../components/Heading';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { colors } from '../styles/variables';
import { onChangeHandler } from '../shared';
import 'react-bootstrap-tagsinput/dist/index.css';
import FileInput from '../components/FileInput';
import Tag from '../components/Tag';
import { create } from '../reducers/NoteReducer';
import { NoteInterface } from '../components/Note';
import { HOME_ROUTE } from '../const/routes';
import { CreateDataInterface } from '../interfaces';
import { createNote } from '../http';

const StyledCreate = styled.div`
  .tagsContainer {
    display: flex;
    width: 100%;
    height: 30px;
    margin: 2rem 0 2rem;
  }
`;

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  function onTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

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
    postData.append('title', title);
    // postData.append('tags', ' '.join(tags));
    // const arrayFiles = Array.from(files);
    // postData.append('files', files);
    postData.append('content', content);
    createNote(postData).then((response) => {
      console.log(response);
      // const newNote: NoteInterfac
      // dispatch(create(newNote));
      history.push(HOME_ROUTE);
    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <StyledCreate>
      <Container>
        <ContentHeader style={{ justifyContent: 'center', marginBottom: '7rem' }}>
          <Heading>Creating</Heading>
        </ContentHeader>
        <RegularText color={colors.primary}>Note title</RegularText>
        <TextInput
          type="text"
          style={{ marginBottom: '7rem' }}
          onChange={(event) => onChangeHandler(event, setTitle)}
        />

        <RegularText color={colors.primary}>Tags</RegularText>
        <div className="tagsContainer">
          {tags.map(((value) => <Tag key={value}>{value}</Tag>))}
        </div>
        <TextInput
          type="text"
          style={{ marginBottom: '6rem' }}
          value={tag}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => addTag(event)}
          onChange={(event) => onChangeHandler(event, setTag)}
        />

        <RegularText color={colors.primary}>Images: PNG, JPG, JPEG</RegularText>
        <FileInput
          files={files}
          onChange={(event) => setFiles(event.target.files)}
        />

        <RegularText color={colors.primary}>Note content</RegularText>
        <TextArea
          style={{ marginBottom: '7rem' }}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onTextareaChange(event)}
        />

        <div className="d-flex justify-content-end" style={{ marginBottom: '7rem' }}>
          <Button onClick={() => onCreateClick()}>
            <Heading>Create</Heading>
          </Button>
        </div>
      </Container>
    </StyledCreate>
  );
};

export default Create;
