import { all } from 'redux-saga/effects';
import { watchRegistration } from '../components/Registration';
import { watchLogin } from '../components/Login';
import { watchReservation } from '../components/calendar';
import { watchClasses } from '../components/classSearch';

export default function* rootSaga() {
  yield all([
    watchRegistration(),
    watchLogin(),
    watchReservation(),
    watchClasses(),
  ]);
}
