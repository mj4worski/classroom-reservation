/* eslint-disable import/first */
import 'babel-polyfill';
import './main.scss'; // TODO:: extract-text-webpack-plugin has bug, which provide wrong css order after introduce babel-polyfill
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap';

import App from './App';
import { sagaMiddleware, createStore, rootSaga, history } from './config';


const store = createStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
