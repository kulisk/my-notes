import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { RootState } from '../reducers/store';
import Note from '../components/Note';
import ContentHeader from '../components/ContentHeader';
import Icon from '../components/Icon';
import { CREATE_ROUTE, SEARCH_ROUTE } from '../const/routes';
import Search from '../components/Search';
import Paginator from '../components/Paginator';
import { NOTES_PER_PAGE } from '../const/numbers';
import { getCountSearchNotes, searchNotes } from '../http';
import { setCount, setNotes } from '../reducers/SearchReducer';

interface Params {
    term: string
    page: string
}

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const params: Params = useParams();
  const searchTerm = params.term;
  const page = +params.page;

  const notes = useSelector((state: RootState) => state.search.notes);
  const countNotes = useSelector(
    (state: RootState) => state.search.foundCount,
  );

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }
    searchNotes(searchTerm, page)
      .then((response) => {
        const foundNotes = response.data;
        for (let i = 0; i < foundNotes.length; i++) {
          foundNotes[i].tags = JSON.parse(foundNotes[i].tags);
        }
        dispatch(setNotes(foundNotes));
      })
      .catch((error) => {
        console.log('Search notes error', error);
      });

    getCountSearchNotes(searchTerm)
      .then((response) => {
        dispatch(setCount(response.data));
      })
      .catch((error) => {
        console.log('Count search notes error', error);
      });
  }, [searchTerm, page, dispatch]);
  return (
    <Container>
      <ContentHeader>
        <NavLink to={CREATE_ROUTE}>
          <Icon src="./icons/plus.svg" width="37" />
        </NavLink>
        <div className="d-flex justify-content-center flex-grow-1">
          <Search />
        </div>
      </ContentHeader>
      {notes.map((item) => (
        <Note
          isPinned={item.isPinned}
          title={item.title}
          tags={item.tags}
          key={item.id}
          id={item.id}
          content={item.content}
        />
      ))}
      {countNotes > NOTES_PER_PAGE && (
        <Paginator
          className="mt-5"
          route={`${SEARCH_ROUTE}/${searchTerm}`}
          totalPages={countNotes}
        />
      )}
    </Container>
  );
};

export default SearchPage;
