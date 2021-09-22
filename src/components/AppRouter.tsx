import React from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../const/routes';
import { RootState } from '../reducers/store';
import { loginAction, logoutAction } from '../reducers/UserReducer';
import Routes from './Routes';

interface JwtInterface extends JwtPayload {
    login: string
}

const AppRouter: React.FC = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  if (token) {
    const decoded = jwtDecode<JwtInterface>(token);
    dispatch(loginAction(decoded.login));
  } else {
    dispatch(logoutAction());
  }

  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  return (
    <Switch>
      {isAuth
        ? (
          <Routes
            redirectPath={HOME_ROUTE}
            routes={authRoutes}
          />
        )
        : (
          <Routes
            redirectPath={LOGIN_ROUTE}
            routes={publicRoutes}
          />
        )}
    </Switch>
  );
};

export default AppRouter;
