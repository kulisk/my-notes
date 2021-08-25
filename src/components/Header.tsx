import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Heading from './Heading';
import { HOME_ROUTE, LOGIN_ROUTE } from '../const/routes';
import Icon from './Icon';
import { RootState } from '../reducers/store';
import { logoutAction } from '../reducers/UserReducer';
import { breakpoints, colors } from '../styles/variables';

const StyledHeader = styled.header`
  background-color: ${colors.primary};
  margin-bottom: 5rem;
  height: 80px;
  padding: 2rem 0 0;
  
  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: ${breakpoints.s}) {
      padding: 0 0.5rem;
    }
  }
  
  .userContainer {
    display: flex;
    align-items: center;
  }
  
  .userNameText {
    font-weight: 500;
    font-size: 2.4rem;
    color: #fff;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    @media (max-width: ${breakpoints.s}) {
      max-width: 170px;
    }

    @media (max-width: ${breakpoints.xs}) {
      max-width: 120px;
    }

    @media (max-width: ${breakpoints.xs}) {
      max-width: 80px;
    }
  }
`;

const Header: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  const userName = useSelector((state: RootState) => state.users.login);

  const dispatch = useDispatch();

  function onLogoutClick() {
    dispatch(logoutAction());
    localStorage.removeItem('accessToken');
  }

  return (
    <StyledHeader>
      <div className="customContainer">
        <div className="headerContainer">
          <NavLink to={HOME_ROUTE}>
            <Heading>My Notes</Heading>
          </NavLink>
          {isAuth && (
          <div className="userContainer">
            <span className="userNameText">{userName}</span>
            <NavLink
              className="ms-3"
              to={LOGIN_ROUTE}
              onClick={() => onLogoutClick()}
            >
              <Icon
                src="/icons/logout.svg"
                width="40"
                height="40"
              />
            </NavLink>
          </div>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
