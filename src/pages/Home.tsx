import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store";
import Note from "../components/Note";
import {Container} from "react-bootstrap";
import ContentHeader from "../components/ContentHeader";

const Home = () => {
    const notes = useSelector((state: RootState) => state.notes.notes)
    return (
        <Container>
            <ContentHeader>

            </ContentHeader>
            {
                notes.map((item) =>
                    <Note key={item.id}
                          isPinned={item.isPinned}
                          title={item.title}
                          tags={item.tags}
                    />
                )
            }
        </Container>
    );
};

export default Home;