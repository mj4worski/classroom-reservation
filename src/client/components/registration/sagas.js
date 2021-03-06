import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { registration as registrationService } from '../../services';
import { failedRegistration, succeededRegistration } from './actions';
import { REGISTRATION } from './constants';

function* registration({ user }) {
  const { id, email, logIn } = yield call(registrationService, user);
  if (logIn) {
    yield put(succeededRegistration({ id, email }));
    yield put(push('/calendar'));
  } else {
    yield put(failedRegistration());
  }
}

export function* watchRegistration() {
  yield takeLatest(REGISTRATION, registration);
}
