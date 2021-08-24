import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { breakpoints, colors } from '../styles/variables';
import { SEARCH_ROUTE } from '../const/routes';
import Icon from './Icon';
import { setSearchTerm } from '../reducers/SearchReducer';

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  max-width: 486px;
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

  @media (max-width: ${breakpoints.xs}) {
    padding: 0;
    border-radius: 0;
    input {
      max-width: 200px;
    }
  }
`;

const Search: React.FC = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSearchClick = () => {
    dispatch(setSearchTerm(search));
  };

  function onSearchKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    if (key !== 'Enter') {
      return;
    }
    event.preventDefault();
    dispatch(setSearchTerm(search));
    history.push(`${SEARCH_ROUTE}/${search}/1`);
  }

  return (
    <StyledSearch>
      <input
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event)}
        onKeyDown={(event) => onSearchKeydown(event)}
      />
      <NavLink to={`${SEARCH_ROUTE}/${search}/1`}>
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
