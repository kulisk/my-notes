import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ContentHeader from '../components/ContentHeader';
import Heading from '../components/Heading';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { create } from '../reducers/NoteReducer';
import { colors } from '../styles/variables';
import { NoteInterface } from '../components/Note';

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  function onCreateClick() {
    console.log(title);
    // const newNote: NoteInterface = {
    //   title,
    // };
    // dispatch(create(newNote));
  }

  function onTitleChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value.toString());
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
        onChange={(event) => onTitleChangeHandler(event)}
      />
      <RegularText color={colors.primary}>Tags</RegularText>
      <TextInput type="text" style={{ marginBottom: '7rem' }} />
      <RegularText color={colors.primary}>Images: PNG, JPG, JPEG</RegularText>
      <TextArea style={{ marginBottom: '7rem' }} />
      <RegularText color={colors.primary}>Note content</RegularText>
      <TextArea style={{ marginBottom: '7rem' }} />
      <div className="d-flex justify-content-end" style={{ marginBottom: '7rem' }}>
        <Button onClick={() => onCreateClick()}>
          <Heading>Create</Heading>
        </Button>
      </div>
    </Container>
  );
};

export default Create;
