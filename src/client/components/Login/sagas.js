import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { login as loginService, loginRememberMe } from '../../services';
import { failedLogin, succeededLogin } from './actions';
import { LOG_IN, REMEMBER_ME } from './constants';

function* login({ user }) {
  const { email, logIn, id } = yield call(loginService, user);
  if (logIn) {
    yield put(succeededLogin({ id, email }));
    yield put(push('/calendar'));
  } else {
    yield put(failedLogin());
  }
}

export function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

function* rememberMe() {
  const { email, logIn, id } = yield call(loginRememberMe);
  if (logIn) {
    yield put(succeededLogin({ id, email }));
  }
}

export function* watchLoginRememberMe() {
  yield takeLatest(REMEMBER_ME, rememberMe);
}
