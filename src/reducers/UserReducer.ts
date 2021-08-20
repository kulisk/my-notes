interface actionInterface {
    type: string
    login?: string
}

interface authInterface {
    login?: string
    isAuth?: boolean
}

const loginType = 'login';
const logoutType = 'logout';

const defaultState: authInterface = {
  login: '',
  isAuth: false,
};

export function userReducer(
  state: authInterface = defaultState,
  action: actionInterface,
): authInterface {
  switch (action.type) {
    case loginType:
      return {
        login: action.login,
        isAuth: true,
      };
    case logoutType:
      return {
        login: '',
        isAuth: false,
      };
    default:
      return state;
  }
}

export const loginAction = (login: string): actionInterface => ({
  type: loginType,
  login,
});
export const logoutAction = (): actionInterface => ({ type: logoutType });
