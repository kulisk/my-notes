interface actionInterface {
    type: string
}

// const CREATE = 'create'

const defaultState = {
    pages: [1, 2, 3, 4]

}

export function pageReducer(state = defaultState, action: actionInterface) {
    switch (action.type) {
        // case CREATE:
        //     return {isAuth: true}
        default:
            return state
    }
}