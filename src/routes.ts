import {
  CREATE_ROUTE, EDIT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE,
} from './const/routes';
import Login from './pages/Login';
import Register from './pages/Register';
import NotePage from './pages/NotePage';
import Create from './pages/Create';
import Search from './pages/Search';
import Home from './pages/Home';

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: `${EDIT_ROUTE}/:id`,
    Component: NotePage,
  },
  {
    path: CREATE_ROUTE,
    Component: Create,
  },
  {
    path: `${SEARCH_ROUTE}/:term`,
    Component: Search,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Register,
  },
];
