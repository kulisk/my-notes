interface actionInterface {
    type: string
}

// const CREATE = 'create'

const defaultState = {
    notes: [
        {
            id: 1,
            isPinned: true,
            title: 'title1',
            tags: [
                'tag1',
                'tag2'
            ]
        },
        {
            id: 2,
            isPinned: false,
            title: 'title2',
            tags: [
                'tag1',
                'tag2',
                'tag3'
            ]
        },
        {
            id: 3,
            isPinned: true,
            title: 'title3',
            tags: [
                'tag1',
                'tag2',
                'tag3'
            ]
        },
        {
            id: 4,
            isPinned: false,
            title: 'title4',
            tags: [
                'tag1',
                'tag2'
            ]
        }
    ]
}

export function noteReducer(state = defaultState, action: actionInterface) {
    switch (action.type) {
        // case CREATE:
        //     return {isAuth: true}
        default:
            return state
    }
}