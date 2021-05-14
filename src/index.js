import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Router from './Router';
import store from "./store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);