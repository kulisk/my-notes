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

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: `${HOME_ROUTE}:page`,
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
    path: `${SEARCH_ROUTE}/:term/:page`,
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
  {
    path: RECOVER_ROUTE,
    Component: EmailInput,
  },
  {
    path: `${RECOVER_ROUTE}/:token`,
    Component: PasswordRecover,
  },
  {
    path: MESSAGE_ROUTE,
    Component: Message,
  },
];
