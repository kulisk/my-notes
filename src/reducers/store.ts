import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {userReducer} from "./UserReducer";
import {noteReducer} from "./NoteReducer";

const rootReducer = combineReducers({
    users: userReducer,
    notes: noteReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch