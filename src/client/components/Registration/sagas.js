import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { registration as registrationService } from '../../services';
import { failedRegistration, succeededRegistration } from './actions';
import { REGISTRATION } from './constants';

function* registration({ user }) {
  const status = yield call(registrationService, user);
  if (status === 200) {
    yield put(succeededRegistration(user.email));
    yield put(push('/calendar'));
  } else {
    yield put(failedRegistration());
  }
}

export function* watchRegistration() {
  yield takeLatest(REGISTRATION, registration);
}
