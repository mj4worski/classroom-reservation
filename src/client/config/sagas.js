import { all } from 'redux-saga/effects';
import { watchRegistration } from '../components/Registration';
import { watchLogin } from '../components/Login';

export default function* rootSaga() {
  yield all([
    watchRegistration(),
    watchLogin(),
  ]);
}
