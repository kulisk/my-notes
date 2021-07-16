interface actionInterface {
    type: string
}

const LOGIN = 'login'
const LOGOUT = 'logout'

export function userReducer(state = {isAuth: false}, action: actionInterface) {
    switch (action.type) {
        case LOGIN:
            return {isAuth: true}
        case LOGOUT:
            return {isAuth: false}
        default:
            return state
    }
}

export const login = () => ({type: LOGIN})
export const logout = () => ({type: LOGOUT})