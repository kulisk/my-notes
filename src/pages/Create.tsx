import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { InputTags } from 'react-bootstrap-tagsinput';
import ContentHeader from '../components/ContentHeader';
import Heading from '../components/Heading';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { create } from '../reducers/NoteReducer';
import { colors } from '../styles/variables';
import { NoteInterface } from '../components/Note';
import { onChangeHandler } from '../shared';
import 'react-bootstrap-tagsinput/dist/index.css';

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  function onTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  function onCreateClick() {
    // const newNote: NoteInterface = {
    //   title,
    // };
    // dispatch(create(newNote));
  }

  return (
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
      <InputTags values={tags} onTags={(value) => setTags(value.values)} className="customTagsInput" />
      <RegularText color={colors.primary}>Images: PNG, JPG, JPEG</RegularText>
      <TextArea style={{ marginBottom: '7rem' }} />
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
  );
};

export default Create;
