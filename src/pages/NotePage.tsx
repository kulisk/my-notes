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
import {RootState} from "../reducers/store";

interface NotePageInterface {

}

const NotePage: React.FC<NotePageInterface> = () => {
        const note = useSelector((state: RootState) => state.notes.notes)
        return (
            <Container>
                <ContentHeader style={{justifyContent: 'center', marginBottom: '7rem'}}>
                    <Heading>Editing</Heading>
                </ContentHeader>
                <RegularText color={colors.primary}>Note title</RegularText>
                <TextInput type={'text'} style={{marginBottom: '7rem'}}/>
                <RegularText color={colors.primary}>Tags</RegularText>
                <TextInput type={'text'} style={{marginBottom: '7rem'}}/>
                <RegularText color={colors.primary}>Images: PNG, JPG, JPEG</RegularText>
                <TextArea style={{marginBottom: '7rem'}}/>
                <RegularText color={colors.primary}>Note content</RegularText>
                <TextArea style={{marginBottom: '7rem'}}/>
                <div className={'d-flex justify-content-end'} style={{marginBottom: '7rem'}}>
                    <Button>
                        <Heading>Save</Heading>
                    </Button>
                </div>
            </Container>
        );
    };

export default NotePage;