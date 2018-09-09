import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { logout as logoutService } from '../../services';
import { failedLogout, succeededLogout } from './actions';
import { LOG_OUT } from './constants';

function* logout() {
  const status = yield call(logoutService);
  if (status === 200) {
    yield put(succeededLogout());
    yield put(push('/'));
  } else {
    yield put(failedLogout());
  }
}

export function* watchLogout() {
  yield takeLatest(LOG_OUT, logout);
}
