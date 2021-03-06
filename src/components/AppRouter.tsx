import React, { FC } from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../const/routes';
import { RootState } from '../reducers/store';
import { loginAction, logoutAction } from '../reducers/UserReducer';

interface JwtInterface extends JwtPayload {
    login: string
}

const AppRouter: FC = () => {
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
        ? authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))
        : publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {isAuth ? (
        <Redirect to={HOME_ROUTE} />
      ) : (
        <Redirect to={LOGIN_ROUTE} />
      )}
    </Switch>
  );
};

export default AppRouter;
