import React, { useEffect } from 'react';
import {
  Switch, Route, Redirect, useLocation,
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

const AppRouter: React.FC = () => {
  console.log('render');
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      console.log('token here!');
      const decoded = jwtDecode<JwtInterface>(token);
      dispatch(loginAction(decoded.login));
    } else {
      console.log('token not here');
      dispatch(logoutAction());
    }
  }, [location, dispatch]);

  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  console.log(isAuth);
  return (
    <Switch>
      {isAuth
            && authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} component={Component} exact />
            ))}
      {publicRoutes.map(({ path, Component }) => (
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
