import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../styles/variables';
import { SEARCH_ROUTE } from '../const/routes';
import Icon from './Icon';
import { RootState } from '../reducers/store';
import { setNotes, setSearchTerm } from '../reducers/SearchReducer';
import { searchNotes } from '../http';

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  width: 486px;
  height: 44px;
  border-radius: 2.2rem;
  background-color: ${colors.primaryDark};
  cursor: pointer;
  padding: 0 2.2rem;

  input {
    height: inherit;
    display: flex;
    flex-grow: 1;
    font-size: 2.4rem;
    font-weight: 400;
    color: ${colors.white};
    background-color: inherit;
    border: none;
  }
`;

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const sendSearchRequest = () => {
    searchNotes(searchTerm).then((res) => {
      const foundNotes = res.data;
      for (let i = 0; i < foundNotes.length; i++) {
        foundNotes[i].tags = JSON.parse(foundNotes[i].tags);
      }
      dispatch(setNotes(foundNotes));
      history.push(`${SEARCH_ROUTE}/${searchTerm}`);
    }).catch((e) => {
      console.log(e);
    });
  };

  const onSearchClick = () => {
    sendSearchRequest();
  };

  function onSearchKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    if (key !== 'Enter') {
      return;
    }
    // event.preventDefault();
    sendSearchRequest();
  }

  return (
    <StyledSearch>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event)}
        onKeyDown={(event) => onSearchKeydown(event)}
      />
      <NavLink to={`${SEARCH_ROUTE}/${searchTerm}`}>
        <Icon
          src="/icons/loupe.svg"
          width="31"
          onClick={() => onSearchClick()}
          notHover
        />
      </NavLink>
    </StyledSearch>
  );
};

export default Search;
