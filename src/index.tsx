import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as dotenv from 'dotenv';
import App from './App';
import GlobalStyle from './styles/global';
import { store } from './reducers/store';

dotenv.config({ path: `${__dirname}.env` });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
