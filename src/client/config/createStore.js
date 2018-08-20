import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
});

export const history = createBrowserHistory();

export const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = applyMiddleware(routerMiddleware(history), sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStore = () => reduxCreateStore(
  connectRouter(history)(reducer),
  composeEnhancers(storeEnhancers),
);

export default createStore;
