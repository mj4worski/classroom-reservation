import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { login as loginService } from '../../services';
import { failedLogin, succeededLogin } from './actions';
import { LOG_IN } from './constants';

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
