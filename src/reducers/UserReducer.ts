interface actionInterface {
    type: string
    login?: string
    accessToken?: string
}

interface authInterface {
    login?: string,
    accessToken?: string,
    isAuth?: boolean,
}

const loginType = 'login';
const logoutType = 'logout';

const defaultState: authInterface = {
  login: '',
  accessToken: '',
  isAuth: false,
};

export function userReducer(state: authInterface = defaultState, action: actionInterface): authInterface {
  switch (action.type) {
    case loginType:
      return {
        login: action.login,
        accessToken: action.accessToken,
        isAuth: true,
      };
    case logoutType:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
}

export const loginAction = (login: string, accessToken: string): actionInterface => ({
  type: loginType,
  login,
  accessToken,
});
export const logoutAction = (): actionInterface => ({ type: logoutType });
