import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { RootState } from '../reducers/store';
import Note from '../components/Note';
import ContentHeader from '../components/ContentHeader';
import Icon from '../components/Icon';
import { CREATE_ROUTE, HOME_ROUTE } from '../const/routes';
import Search from '../components/Search';
import Paginator from '../components/Paginator';
import { getAllNotesInPage } from '../http';
import { setNotes } from '../reducers/NoteReducer';
import { NOTES_PER_PAGE } from '../const/numbers';
import RegularText from '../components/RegularText';
import Loading from '../components/Loading';

interface Params {
    page: string
}

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const params: Params = useParams();
  const pageNumber = params.page ? +params.page : 1;
  const page = Number.isNaN(pageNumber) ? 1 : pageNumber;
  const notesInPage = useSelector((state: RootState) => state.notes.notes);
  const countNotes = useSelector((state: RootState) => state.notes.totalCount);

  useEffect(() => {
    getAllNotesInPage(page)
      .then((response) => {
        const foundNotes = response.data[0];
        for (let i = 0; i < foundNotes.length; i++) {
          foundNotes[i].tags = JSON.parse(foundNotes[i].tags);
        }
        dispatch(setNotes(foundNotes, response.data[1]));
        setIsLoaded(true);
        if (page > 1 && foundNotes.length === 0) {
          history.push(`${HOME_ROUTE}${page - 1}`);
        }
      })
      .catch((error) => {
        console.log('error in getting notes', error);
      });
  }, [countNotes, page, dispatch, history, notesInPage.length]);
  if (isLoaded) {
    return (
      <div className="customContainer">
        <ContentHeader>
          <NavLink to={CREATE_ROUTE}>
            <Icon src="/icons/plus.svg" width="37" />
          </NavLink>
          <div className="searchContainer">
            <Search />
          </div>
        </ContentHeader>
        {notesInPage.length !== 0 ? notesInPage.map((item) => (
          <Note
            isPinned={item.isPinned}
            title={item.title}
            tags={item.tags}
            key={item.id}
            id={item.id}
            content={item.content}
          />
        )) : <RegularText color="#000">You have not any note</RegularText>}
        {countNotes > NOTES_PER_PAGE && (
          <Paginator
            className="mt-5"
            route={HOME_ROUTE}
            totalPages={countNotes / NOTES_PER_PAGE}
          />
        )}
      </div>
    );
  }
  return <Loading />;
};

export default Home;
