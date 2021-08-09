import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Heading from './Heading';
import RegularText from './RegularText';
import { HOME_ROUTE, LOGIN_ROUTE } from '../const/routes';
import Icon from './Icon';
import { RootState } from '../reducers/store';
import { logoutAction } from '../reducers/UserReducer';

const Header: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  const userName = useSelector((state: RootState) => state.users.login);

  const dispatch = useDispatch();

  function onLogoutClick() {
    dispatch(logoutAction());
  }

  return (
    <Navbar className="color-primary p-3 mb-5" expand="sm">
      <Container>
        <NavLink to={HOME_ROUTE}><Heading>My Notes</Heading></NavLink>
        {
                    isAuth
                    && (
                    <div className="d-flex align-items-center">
                      <RegularText color="#fff">{userName}</RegularText>
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
                    )
                }
      </Container>
    </Navbar>
  );
};

export default Header;
