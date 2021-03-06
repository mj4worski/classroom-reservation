import { all } from 'redux-saga/effects';
import { watchRegistration } from '../components/registration';
import { watchLogin, watchLoginRememberMe } from '../components/Login';
import { watchReservation, watchReservationByUserId } from '../components/calendar';
import { watchClasses, watchUpdateClass, watchAddClass, watchDeleteClass } from '../components/shared/sagas';
import { watchLogout } from '../components/Logout';

export default function* rootSaga() {
  yield all([
    watchRegistration(),
    watchLogin(),
    watchReservation(),
    watchReservationByUserId(),
    watchClasses(),
    watchUpdateClass(),
    watchDeleteClass(),
    watchAddClass(),
    watchLoginRememberMe(),
    watchLogout(),
  ]);
}
