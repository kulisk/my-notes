import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { RootState } from '../reducers/store';
import Note, { NoteInterface } from '../components/Note';
import ContentHeader from '../components/ContentHeader';
import Icon from '../components/Icon';
import { CREATE_ROUTE } from '../const/routes';
import Search from '../components/Search';
import Paginator from '../components/Paginator';

const Home = () => {
  const notes = useSelector((state: RootState) => state.notes);
  const sortedNotes: Array<NoteInterface> = [];
  notes.forEach((item) => {
    if (item.isPinned) { sortedNotes.unshift(item); } else { sortedNotes.push(item); }
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
                  />
                ))
            }
      {notes.length > 10 && <Paginator className="mt-5" />}
    </Container>
  );
};

export default Home;
