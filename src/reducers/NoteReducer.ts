import {NoteInterface} from '../components/Note'

interface Action {
    type: string
    id?: number
}

const PIN: string = 'pin'
const REMOVE: string = 'remove'
const COPY: string = 'copy'
const CREATE: string = 'create'

const defaultState: Array<NoteInterface> = [
    {
        id: 1,
        isPinned: true,
        title: 'title1',
        tags: [
            'tag1',
            'tag2'
        ],
        content: 'They told him don\'t you ever come around here\n' +
            'Don\'t wanna see your face, you better disappear\n' +
            'The fire\'s in their eyes and their words are really clear\n' +
            'So beat it, just beat it'
    },
    {
        id: 2,
        isPinned: false,
        title: 'title2',
        tags: [
            'tag1',
            'tag2',
            'tag3'
        ],
        content: ''
    },
    {
        id: 3,
        isPinned: true,
        title: 'title3',
        tags: [
            'tag1',
            'tag2',
            'tag3'
        ],
        content: ''
    },
    {
        id: 4,
        isPinned: false,
        title: 'title4',
        tags: [
            'tag1',
            'tag2'
        ],
        content: ''
    }
]

export function noteReducer(state = defaultState, action: Action): Array<NoteInterface> {
    switch (action.type) {
        case PIN:
            return state.map((item) => {
                if (item.id !== action.id) {
                    return item
                }
                return {
                    ...item,
                    isPinned: !item.isPinned
                }
            })
        case REMOVE:
            return state.filter((element) => element.id !== action.id)
        case COPY:
            const noteToCopy = Object.assign({}, state.filter((element) => element.id === action.id)[0])
            noteToCopy.id = getMaxId() + 1
            return state
                .slice(0, state.length)
                .concat([noteToCopy])
        case CREATE:
            return state
        default:
            return state
    }

    function getMaxId() {
        return Math.max.apply(Math, state.map(function (note) {
            return note.id;
        }))
    }

}

export const pin = (id: number) => ({type: PIN, id: id})
export const remove = (id: number) => ({type: REMOVE, id: id})
export const copy = (id: number) => ({type: COPY, id: id})
export const create = () => ({type: CREATE})