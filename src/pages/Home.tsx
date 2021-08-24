import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { RootState } from '../reducers/store';
import Note from '../components/Note';
import ContentHeader from '../components/ContentHeader';
import Icon from '../components/Icon';
import { CREATE_ROUTE, HOME_ROUTE } from '../const/routes';
import Search from '../components/Search';
import Paginator from '../components/Paginator';
import { getAllNotesInPage, getCountNotes } from '../http';
import { setNotes, setTotalCount } from '../reducers/NoteReducer';
import { NOTES_PER_PAGE } from '../const/numbers';

interface Params {
    page: string
}

const Home: React.FC = () => {
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
        const foundNotes = response.data;
        for (let i = 0; i < foundNotes.length; i++) {
          foundNotes[i].tags = JSON.parse(foundNotes[i].tags);
        }
        dispatch(setNotes(foundNotes));
      })
      .catch((error) => {
        console.log('error in getting notes', error);
      });

    getCountNotes()
      .then((res) => {
        dispatch(setTotalCount(res.data));
      })
      .catch((error) => {
        console.log('Error in counting notes', error);
      });
  }, [countNotes, page, dispatch, history]);
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
      {notesInPage.map((item) => (
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
          route={HOME_ROUTE}
          totalPages={countNotes / NOTES_PER_PAGE}
        />
      )}
    </div>
  );
};

export default Home;
