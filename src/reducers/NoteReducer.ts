import { NoteInterface } from '../components/Note';

interface Action {
    type: string
    id: number
    note: NoteInterface
    notes: NoteInterface[]
    totalCount: number
    page: number
}

interface State {
    notes: NoteInterface[]
    totalCount: number
    page: number
}

const PIN = 'pin';
const REMOVE = 'remove';
const CREATE = 'create';
const COPY = 'copy';
const updateAction = 'update';
const SET_TOTAL_COUNT = 'setTotalCount';
const GO_TO_PAGE = 'goToPage';
const SET_NOTES = 'setNotes';

const defaultState: State = {
  notes: [],
  totalCount: 0,
  page: 1,
};

const defaultNote: NoteInterface = {
  id: 0,
  title: '',
  tags: [],
  content: '',
};

const defaultAction: Action = {
  type: '',
  id: 0,
  note: defaultNote,
  notes: [],
  totalCount: 0,
  page: 0,
};

export function noteReducer(state = defaultState, action: Action): State {
  switch (action.type) {
    case SET_NOTES:
      return {
        ...state,
        notes: action.notes,
      };
    case GO_TO_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case PIN:
      return {
        ...state,
        notes: state.notes.map((item) => {
          if (item.id !== action.id) {
            return item;
          }
          return {
            ...item,
            isPinned: !item.isPinned,
          };
        }),
      };
    case REMOVE:
      return {
        ...state,
        totalCount: state.totalCount - 1,
        notes: state.notes.filter(
          (element) => element.id !== action.id,
        ),
      };
    case COPY: {
      const noteToCopy = action.note;
      return {
        ...state,
        totalCount: state.totalCount + 1,
        notes: state.notes
          .slice(0, state.notes.length)
          .concat([noteToCopy]),
      };
    }
    case CREATE:
      return {
        ...state,
        totalCount: state.totalCount + 1,
        notes: state.notes
          .slice(0, state.notes.length)
          .concat([action.note]),
      };
    case updateAction:
      return {
        ...state,
        notes: state.notes.map((item) => {
          if (item.id !== action.id) {
            return item;
          }
          return {
            ...item,
            title: action.note.title,
            content: action.note.content,
            tags: action.note.tags,
          };
        }),
      };
    default:
      return state;
  }
}

export const pin = (id: number): Action => ({ ...defaultAction, type: PIN, id });
export const remove = (id: number): Action => ({ ...defaultAction, type: REMOVE, id });
export const copy = (id: number, note: NoteInterface): Action => ({
  ...defaultAction,
  type: COPY,
  id,
  note,
});
export const create = (note: NoteInterface): Action => ({ ...defaultAction, type: CREATE, note });
export const update = (id: number, note: NoteInterface): Action => ({
  ...defaultAction,
  type: updateAction,
  id,
  note,
});
export const setTotalCount = (totalCount: number): Action => ({
  ...defaultAction,
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const goToPage = (page: number): Action => ({ ...defaultAction, type: GO_TO_PAGE, page });
export const setNotes = (notes: NoteInterface[]): Action => ({ ...defaultAction, type: SET_NOTES, notes });
