import { io } from 'socket.io-client';
import {
  copy, create, pin, remove, update,
} from './reducers/NoteReducer';
import { store } from './reducers/store';
import {
  COPY, CREATE, PIN, REMOVE, UPDATE,
} from './const/websocket-events';

export const socket = io(process.env.REACT_APP_API_URL || 'http://localhost:5000/');

socket.on(PIN, (data) => {
  store.dispatch(pin(data.id));
});

socket.on(REMOVE, (data) => {
  store.dispatch(remove(data.id));
});

socket.on(COPY, (data) => {
  store.dispatch(copy(data.id, data.duplicate));
});

socket.on(UPDATE, (data) => {
  store.dispatch(update(data.id, data.note));
});

socket.on(CREATE, (data) => {
  store.dispatch(create(data.note));
});
