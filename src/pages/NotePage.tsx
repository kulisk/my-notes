import React from 'react';
import ContentHeader from "../components/ContentHeader";
import Heading from "../components/Heading";
import RegularText from "../components/RegularText";
import {colors} from "../styles/variables";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {RootState} from "../reducers/store";

interface Note {
    id: string
}

const NotePage: React.FC = () => {
    const {id} = useParams<Note>();
    const note = useSelector((state: RootState) => state.notes.filter((element) => element.id === +id)[0])
    return (
        <Container>
            <ContentHeader style={{justifyContent: 'center', marginBottom: '7rem'}}>
                <Heading>Editing</Heading>
            </ContentHeader>
            <RegularText color={colors.primary}>Note title</RegularText>
            <TextInput type={'text'} style={{marginBottom: '7rem'}} value={note.title}/>
            <RegularText color={colors.primary}>Tags</RegularText>
            {
                note.tags && note.tags.map((item, index, array) => {
                        return index === array.length - 1
                            ? <TextInput key={index} type={'text'} style={{marginBottom: '7rem'}} value={item}/>
                            : <TextInput key={index} type={'text'} style={{marginBottom: '1.5rem'}} value={item}/>
                    }
                )
            }
            <RegularText color={colors.primary}>Images: PNG, JPG, JPEG</RegularText>
            <TextArea style={{marginBottom: '7rem'}}/>
            <RegularText color={colors.primary}>Note content</RegularText>
            <TextArea style={{marginBottom: '7rem'}} value={note.content}/>
            <div className={'d-flex justify-content-end'} style={{marginBottom: '7rem'}}>
                <Button>
                    <Heading>Save</Heading>
                </Button>
            </div>
        </Container>
    );
};

export default NotePage;