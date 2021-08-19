import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { RootState } from '../reducers/store';
import Note, { NoteInterface } from '../components/Note';
import ContentHeader from '../components/ContentHeader';
import Icon from '../components/Icon';
import { CREATE_ROUTE, HOME_ROUTE } from '../const/routes';
import Search from '../components/Search';
import Paginator from '../components/Paginator';
import { getAllNotesInPage, getCountNotes } from '../http';
import { create, setTotalCount } from '../reducers/NoteReducer';
import { NOTES_PER_PAGE } from '../const/numbers';

interface Params {
    page?: string
}

const Home: React.FC = () => {
  const params = useParams<Params>();
  const page = params.page ? +params.page : 1;
  const dispatch = useDispatch();

  const notesInPage = useSelector((state: RootState) => state.notes.notes);
  const countNotes = useSelector((state: RootState) => state.notes.totalCount);

  useEffect(() => {
    getAllNotesInPage(page).then((response) => {
      if (notesInPage.length > 0) {
        return;
      }
      const notesDb = response.data;
      for (let i = 0; i < notesDb.length; i++) {
        notesDb[i].tags = JSON.parse(notesDb[i].tags);
      }
      notesDb.forEach((value: NoteInterface) => {
        dispatch(create(value));
      });
    }).catch((error) => {
      console.log(error);
    });

    getCountNotes().then((res) => {
      dispatch(setTotalCount(res.data));
    }).catch((error) => {
      console.log('Error in counting notes', error);
    });
  }, [page, dispatch, notesInPage.length]);
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
                notesInPage.map((item) => (
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
      {countNotes > NOTES_PER_PAGE && (
        <Paginator
          className="mt-5"
          route={HOME_ROUTE}
          totalPages={countNotes / NOTES_PER_PAGE}
          currentPage={page}
        />
      )}
    </Container>
  );
};

export default Home;
