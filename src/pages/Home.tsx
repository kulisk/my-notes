import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { RootState } from '../reducers/store';
import Note, { NoteInterface } from '../components/Note';
import ContentHeader from '../components/ContentHeader';
import Icon from '../components/Icon';
import { CREATE_ROUTE } from '../const/routes';
import Search from '../components/Search';
import Paginator from '../components/Paginator';
import { getAllNotes } from '../http';
import { create } from '../reducers/NoteReducer';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  const notes = useSelector((state: RootState) => state.notes);

  useEffect(() => {
    getAllNotes().then((response) => {
      if (notes.length > 0) {
        return;
      }
      const notesDb = response.data;
      for (let i = 0; i < notesDb.length; i += 1) {
        notesDb[i].tags = JSON.parse(notesDb[i].tags);
      }
      notesDb.forEach((value: NoteInterface) => {
        dispatch(create(value));
      });
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const sortedNotes: Array<NoteInterface> = [];
  notes.forEach((item) => {
    if (item.isPinned) {
      sortedNotes.unshift(item);
    } else {
      sortedNotes.push(item);
    }
  });
  return (
    <Container>
      <ContentHeader>
        <NavLink to={CREATE_ROUTE}>
          <Icon
            src="/icons/plus.svg"
            width="37"
          />
        </NavLink>
        <div className="d-flex justify-content-center flex-grow-1">
          <Search />
        </div>
      </ContentHeader>
      {
                sortedNotes.map((item) => (
                  <Note
                    isPinned={item.isPinned}
                    title={item.title}
                    tags={item.tags}
                    key={item.id}
                    id={item.id}
                    content={item.content}
                  />
                ))
            }
      {notes.length > 10 && <Paginator className="mt-5" />}
    </Container>
  );
};

export default Home;
