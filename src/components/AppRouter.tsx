import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../const/routes';
import { RootState } from '../reducers/store';

const AppRouter = (): JSX.Element => {
  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  return (
    <Switch>
      {isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
      {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
      {isAuth ? <Redirect to={HOME_ROUTE} /> : <Redirect to={LOGIN_ROUTE} />}
    </Switch>
  );
};

export default AppRouter;
