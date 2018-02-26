/* eslint-disable import/first */
import 'babel-polyfill';
import './main.scss'; // TODO:: extract-text-webpack-plugin has bug, which provide wrong css order after introduce babel-polyfill
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap';
import App from './components/App';
import { sagaMiddleware, createStore, rootSaga } from './config';


const store = createStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
