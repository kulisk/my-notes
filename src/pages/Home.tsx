import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store";
import Note from "../components/Note";
import {Container} from "react-bootstrap";
import ContentHeader from "../components/ContentHeader";
import Icon from "../components/Icon";
import {CREATE_ROUTE, EDIT_ROUTE} from "../const/routes";
import {NavLink} from "react-router-dom";
import Search from "../components/Search";
import Paginator from "../components/Paginator";

const Home = () => {
    const notes = useSelector((state: RootState) => state.notes.notes)
    return (
        <Container>
            <ContentHeader>
                <NavLink to={CREATE_ROUTE}>
                    <Icon src={'./icons/plus.svg'}
                          width={'37'}/>
                </NavLink>
                <div className="d-flex justify-content-center flex-grow-1">
                    <Search/>
                </div>
            </ContentHeader>
            {
                notes.map((item) =>
                    <NavLink to={EDIT_ROUTE + '/' + item.id}
                             key={item.id}>
                        <Note isPinned={item.isPinned}
                              title={item.title}
                              tags={item.tags}
                        />
                    </NavLink>
                )
            }
            <Paginator className={'mt-5'}/>
        </Container>
    );
};

export default Home;