import React, { ChangeEvent, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import ContentHeader from '../components/ContentHeader';
import Heading from '../components/Heading';
import RegularText from '../components/RegularText';
import { colors } from '../styles/variables';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { RootState } from '../reducers/store';
import FileInput from '../components/FileInput';
import { getOneNote, updateNote } from '../http';
import Tag from '../components/Tag';
import { onChangeHandler, onTextareaChange } from '../shared';
import { NoteInterface } from '../components/Note';
import { update } from '../reducers/NoteReducer';
import { HOME_ROUTE } from '../const/routes';

interface Note {
    id: string
}

interface ImageInterface {
    customName: string
}

interface ImageSetInterface {
    src: string
    width: number
    height: number
}

const NotePage: React.FC = () => {
  const { id } = useParams<Note>();
  const note = useSelector((state: RootState) => state.notes.filter((element) => element.id === +id)[0]);

  const [title, setTitle] = useState(note.title);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>(note.tags);
  const [files, setFiles] = useState<FileList | null>(null);
  const [content, setContent] = useState(note.content);
  const [images, setImages] = useState<ImageInterface[]>([]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    getOneNote(+id).then((response) => {
      setImages(response.data.images);
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  function addTag(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    if (key !== 'Enter' || tag === '') {
      return;
    }
    event.preventDefault();
    setTags((oldTags) => [...oldTags, tag]);
    setTag('');
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const imagesSet: ImageSetInterface[] = images.map((value) => ({
    src: process.env.REACT_APP_API_URL + value.customName,
    width: 1,
    height: 1,
  }));

  const onSaveClick = () => {
    const updateData = new FormData();
    if (files !== null) {
      const filesArray = Array.from(files);
      filesArray.forEach((value) => {
        updateData.append('files', value);
      });
    }
    updateData.append('title', title);

    updateData.append('content', content);
    updateData.append('tags', JSON.stringify(tags));
    updateNote(id, updateData).then((response) => {
      console.log(response);
      const updatedNote: NoteInterface = {
        id: +id,
        tags,
        title,
        content,
      };
      dispatch(update(+id, updatedNote));
      history.push(HOME_ROUTE);
    }).catch((e) => {
      console.log(e);
    });
  };
  return (
    <Container>
      <ContentHeader style={{ justifyContent: 'center', marginBottom: '7rem' }}>
        <Heading>Editing</Heading>
      </ContentHeader>
      <RegularText color={colors.primary}>Note title</RegularText>
      <TextInput
        type="text"
        style={{ marginBottom: '7rem' }}
        defaultValue={title}
        onChange={(event) => onChangeHandler(event, setTitle)}
      />

      <RegularText color={colors.primary}>Tags</RegularText>
      <div className="tagsContainer">
        {tags.map(((value) => (
          <div key={value} className="d-flex">
            <Tag>{value}</Tag>
            <button type="button" className="removeButton" onClick={() => removeTag(value)}>&times;</button>
          </div>
        )))}
      </div>
      <TextInput
        type="text"
        style={{ marginBottom: '7rem' }}
        value={tag}
        onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => addTag(event)}
        onChange={(event) => onChangeHandler(event, setTag)}
      />

      <RegularText color={colors.primary}>Images: PNG, JPG, JPEG</RegularText>
      <Gallery
        photos={imagesSet}
        // onClick={(event, photos) => removeImage(event, photos)}
      />
      <FileInput
        files={files}
        onChange={(event) => setFiles(event.target.files)}
      />

      <RegularText color={colors.primary}>Note content</RegularText>
      <TextArea
        style={{ marginBottom: '7rem' }}
        value={content}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onTextareaChange(event, setContent)}
      />

      <div className="d-flex justify-content-end" style={{ marginBottom: '7rem' }}>
        <Button onClick={() => onSaveClick()}>
          <Heading>Save</Heading>
        </Button>
      </div>
    </Container>
  );
};

export default NotePage;
