import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { login as loginService, loginRememberMe } from '../../services';
import { failedLogin, succeededLogin } from './actions';
import { LOG_IN, REMEMBER_ME } from './constants';

function* login({ user }) {
  const status = yield call(loginService, user);
  if (status === 200) {
    yield put(succeededLogin());
    yield put(push('/calendar'));
  } else {
    yield put(failedLogin());
  }
}

export function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

function* rememberMe() {
  const status = yield call(loginRememberMe);
  if (status === 200) {
    yield put(succeededLogin());
  }
}

export function* watchLoginRememberMe() {
  yield takeLatest(REMEMBER_ME, rememberMe);
}
