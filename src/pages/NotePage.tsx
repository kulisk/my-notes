import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import { getOneNote } from '../http';
import Tag from '../components/Tag';
import { onChangeHandler } from '../shared';

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
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);
  const [content, setContent] = useState('');
  const [images, setImages] = useState<ImageInterface[]>([]);
  useEffect(() => {
    getOneNote(+id).then((response) => {
      setImages(response.data.images);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  const imagesSet: ImageSetInterface[] = images.map((value) => ({
    src: process.env.REACT_APP_API_URL + value.customName,
    width: 1,
    height: 1,
  }));
  const note = useSelector((state: RootState) => state.notes.filter((element) => element.id === +id)[0]);
  return (
    <Container>
      <ContentHeader style={{ justifyContent: 'center', marginBottom: '7rem' }}>
        <Heading>Editing</Heading>
      </ContentHeader>
      <RegularText color={colors.primary}>Note title</RegularText>
      <TextInput type="text" style={{ marginBottom: '7rem' }} defaultValue={note.title} />

      <RegularText color={colors.primary}>Tags</RegularText>
      <div className="tagsContainer">
        {tags.map(((value) => <Tag key={value}>{value}</Tag>))}
      </div>
      <TextInput
        type="text"
        style={{ marginBottom: '7rem' }}
        onChange={(event) => onChangeHandler(event, setTitle)}
      />

      <RegularText color={colors.primary}>Images: PNG, JPG, JPEG</RegularText>
      {/* { */}
      {/*          images.map((value) => ( */}
      {/*            <img */}
      {/*              key={value.customName} */}
      {/*              src={process.env.REACT_APP_API_URL + value.customName} */}
      {/*              alt={value.customName} */}
      {/*            /> */}
      {/*          )) */}
      {/*      } */}
      <Gallery photos={imagesSet} columns={3} />
      <FileInput
        files={files}
        onChange={(event) => setFiles(event.target.files)}
      />

      <RegularText color={colors.primary}>Note content</RegularText>
      <TextArea style={{ marginBottom: '7rem' }} value={note.content} />

      <div className="d-flex justify-content-end" style={{ marginBottom: '7rem' }}>
        <Button>
          <Heading>Save</Heading>
        </Button>
      </div>
    </Container>
  );
};

export default NotePage;
