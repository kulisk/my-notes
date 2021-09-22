import React from 'react';
import {
  CREATE_ROUTE,
  EDIT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SEARCH_ROUTE,
  RECOVER_ROUTE,
  MESSAGE_ROUTE,
} from './const/routes';
import Login from './pages/Login';
import Register from './pages/Register';
import NotePage from './pages/NotePage';
import Create from './pages/Create';
import Search from './pages/Search';
import Home from './pages/Home';
import EmailInput from './pages/EmailInput';
import PasswordRecover from './pages/PasswordRecover';
import Message from './components/Message';

export interface RouteInterface {
    path: string;
    Component: () => JSX.Element;
}

export const authRoutes: RouteInterface[] = [
  {
    path: HOME_ROUTE,
    Component: () => <Home key={window.location.pathname} />,
  },
  {
    path: `${HOME_ROUTE}:page`,
    Component: () => <Home key={window.location.pathname} />,
  },
  {
    path: `${EDIT_ROUTE}/:id`,
    Component: () => <NotePage key={window.location.pathname} />,
  },
  {
    path: CREATE_ROUTE,
    Component: () => <Create key={window.location.pathname} />,
  },
  {
    path: `${SEARCH_ROUTE}/:term/:page`,
    Component: () => <Search key={window.location.pathname} />,
  },
];

export const publicRoutes: RouteInterface[] = [
  {
    path: LOGIN_ROUTE,
    Component: () => <Login key={window.location.pathname} />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: () => <Register key={window.location.pathname} />,
  },
  {
    path: RECOVER_ROUTE,
    Component: () => <EmailInput key={window.location.pathname} />,
  },
  {
    path: `${RECOVER_ROUTE}/:token`,
    Component: () => <PasswordRecover key={window.location.pathname} />,
  },
  {
    path: MESSAGE_ROUTE,
    Component: () => <Message key={window.location.pathname} />,
  },
];
