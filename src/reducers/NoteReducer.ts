import { NoteInterface } from '../components/Note';

interface Action {
    type: string
    id?: number
    note: NoteInterface
}

const PIN = 'pin';
const REMOVE = 'remove';
const COPY = 'copy';
const CREATE = 'create';
const updateAction = 'update';

const defaultState: NoteInterface[] = [];

export function noteReducer(state = defaultState, action: Action): Array<NoteInterface> {
  switch (action.type) {
    case PIN:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }
        return {
          ...item,
          isPinned: !item.isPinned,
        };
      });
    case REMOVE:
      return state.filter((element) => element.id !== action.id);
    case COPY: {
      const noteToCopy = action.note;
      return state
        .slice(0, state.length)
        .concat([noteToCopy]);
    }
    case CREATE:
      return state
        .slice(0, state.length)
        .concat([action.note]);
    case updateAction:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }
        return {
          ...item,
          // isPinned: action.note.isPinned,
          title: action.note.title,
          content: action.note.content,
          tags: action.note.tags,
        };
      });
    default:
      return state;
  }
}

export const pin = (id: number) => ({ type: PIN, id });
export const remove = (id: number) => ({ type: REMOVE, id });
export const copy = (id: number, note: NoteInterface) => ({ type: COPY, id, note });
export const create = (note: NoteInterface) => ({ type: CREATE, note });
export const update = (id: number, note: NoteInterface) => ({ type: updateAction, id, note });
