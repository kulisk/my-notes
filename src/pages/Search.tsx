import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { RootState } from '../reducers/store';
import Note from '../components/Note';
import ContentHeader from '../components/ContentHeader';
import Icon from '../components/Icon';
import { CREATE_ROUTE, SEARCH_ROUTE } from '../const/routes';
import Search from '../components/Search';
import Paginator from '../components/Paginator';
import { NOTES_PER_PAGE } from '../const/numbers';
import { searchNotes } from '../http';
import { setNotes } from '../reducers/SearchReducer';
import RegularText from '../components/RegularText';
import Loading from '../components/Loading';

interface Params {
    term: string
    page: string
}

const SearchPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
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
        const foundNotes = response.data[0];
        for (let i = 0; i < foundNotes.length; i++) {
          foundNotes[i].tags = JSON.parse(foundNotes[i].tags);
        }
        dispatch(setNotes(foundNotes, response.data[1]));
        setIsLoaded(true);
        if (page > 1 && foundNotes.length === 0) {
          history.push(`${SEARCH_ROUTE}/${searchTerm}/${page - 1}`);
        }
      })
      .catch((error) => {
        console.log('Search notes error', error);
      });
  }, [searchTerm, page, dispatch, history, notes]);

  if (isLoaded) {
    return (
      <div className="customContainer">
        <ContentHeader>
          <NavLink to={CREATE_ROUTE}>
            <Icon src="./icons/plus.svg" width="37" />
          </NavLink>
          <div className="d-flex justify-content-center flex-grow-1">
            <Search />
          </div>
        </ContentHeader>
        {notes.length > 0 ? notes.map((item) => (
          <Note
            isPinned={item.isPinned}
            title={item.title}
            tags={item.tags}
            key={item.id}
            id={item.id}
            content={item.content}
          />
        )) : <RegularText color="#000">there are no such notes</RegularText>}
        {countNotes > NOTES_PER_PAGE && (
        <Paginator
          className="mt-5"
          route={`${SEARCH_ROUTE}/${searchTerm}`}
          totalPages={countNotes / NOTES_PER_PAGE}
        />
        )}
      </div>
    );
  }
  return <Loading />;
};

export default SearchPage;
