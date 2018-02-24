import { call, put, takeLatest } from 'redux-saga/effects';
import { registration as registrationService } from '../../services';
import { failedLogin, succeededLogin } from './actions';
import { REGISTRATION } from './constants';

function* registration({ user }) {
  const status = yield call(registrationService, user);
  if (status === 200) {
    yield put(succeededLogin());
  } else {
    yield put(failedLogin());
  }
}

export function* watchRegistration() {
  yield takeLatest(REGISTRATION, registration);
}
