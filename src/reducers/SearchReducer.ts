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
    foundCount: number
}

const SET_SEARCH_TERM = 'setSearchTerm';
const SET_NOTES = 'setNotes';

const defaultState: State = {
  notes: [],
  searchTerm: '',
  foundCount: 0,
};

const defaultAction: Action = {
  type: '',
  value: '',
  notes: [],
  count: 0,
};

export function searchReducer(state = defaultState, action: Action): State {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.value,
      };
    case SET_NOTES:
      return {
        ...state,
        notes: action.notes,
        foundCount: action.count,
      };
    default:
      return state;
  }
}

export const setSearchTerm = (value: string): Action => ({
  ...defaultAction,
  type: SET_SEARCH_TERM,
  value,
});
export const setNotes = (notes: NoteInterface[], count: number): Action => ({
  ...defaultAction,
  type: SET_NOTES,
  notes,
  count,
});
