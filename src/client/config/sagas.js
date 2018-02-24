import { all } from 'redux-saga/effects';
import { watchRegistration } from '../components/Registration';

export default function* rootSaga() {
  yield all([
    watchRegistration(),
  ]);
}
