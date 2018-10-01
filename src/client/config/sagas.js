import { all } from 'redux-saga/effects';
import { watchRegistration } from '../components/Registration';
import { watchLogin, watchLoginRememberMe } from '../components/Login';
import { watchReservation } from '../components/calendar';
import { watchClasses, watchUpdateClass, watchAddClass, watchDeleteClass } from '../components/shared/sagas';
import { watchLogout } from '../components/Logout';

export default function* rootSaga() {
  yield all([
    watchRegistration(),
    watchLogin(),
    watchReservation(),
    watchClasses(),
    watchUpdateClass(),
    watchDeleteClass(),
    watchAddClass(),
    watchLoginRememberMe(),
    watchLogout(),
  ]);
}
