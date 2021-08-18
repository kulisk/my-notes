import { NoteInterface } from '../components/Note';

interface Action {
    type: string
    value: string
    notes: NoteInterface[]
}

interface State {
    notes: NoteInterface[],
    searchTerm: string
}

const SET_SEARCH_TERM = 'setSearchTerm';
const SET_NOTES = 'setNotes';

const defaultState: State = {
  notes: [],
  searchTerm: '',
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
      };
    default:
      return state;
  }
}

export const setSearchTerm = (value: string) => ({ type: SET_SEARCH_TERM, value });
export const setNotes = (notes: NoteInterface[]) => ({ type: SET_NOTES, notes });
