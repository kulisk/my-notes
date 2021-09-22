import React, { FC, PropsWithChildren } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RouteInterface } from '../routes';

interface RoutesPropsInterface {
    redirectPath: string;
    routes: RouteInterface[];
}

const Routes: FC<PropsWithChildren<RoutesPropsInterface>> = (props: PropsWithChildren<RoutesPropsInterface>) => {
  const { redirectPath, routes } = props;
  return (
    <>
      {routes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
      <Redirect to={redirectPath} />
    </>
  );
};

export default Routes;
