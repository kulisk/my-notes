import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../styles/variables';
import { SEARCH_ROUTE } from '../const/routes';
import Icon from './Icon';

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

const Search: React.FC = () => (
  <StyledSearch>
    <input type="text" />
    <NavLink to={SEARCH_ROUTE}>
      <Icon
        src="/icons/loupe.svg"
        width="31"
        notHover
      />
    </NavLink>
  </StyledSearch>
);

export default Search;
