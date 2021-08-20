import { NoteInterface } from '../components/Note';

interface Action {
    type: string
    value: string
    notes: NoteInterface[]
    count: number
}

interface State {
    notes: NoteInterface[]
    searchTerm: string
    page: number
    foundCount: number
}

const SET_SEARCH_TERM = 'setSearchTerm';
const SET_NOTES = 'setNotes';
const SET_COUNT = 'setCount';

const defaultState: State = {
  notes: [],
  searchTerm: '',
  page: 1,
  foundCount: 0,
};

export function searchReducer(state = defaultState, action: Action): State {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        foundCount: action.count,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.value,
      };
    case SET_NOTES:
      return {
        ...state,
        notes: action.notes,
      };
    default:
      return state;
  }
}

export const setSearchTerm = (value: string) => ({
  type: SET_SEARCH_TERM,
  value,
});
export const setNotes = (notes: NoteInterface[]) => ({ type: SET_NOTES, notes });
export const setCount = (count: number) => ({ type: SET_COUNT, count });
