import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./styles/global";
import {Provider} from "react-redux";
import {store} from "./reducers/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle/>
            <App/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);