import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
});

export const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStore = () => reduxCreateStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export default createStore;
