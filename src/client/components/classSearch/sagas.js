import { call, put, takeLatest } from 'redux-saga/effects';
import { getClasses } from '../../services';
import { classes, classesFetchFailed } from './actions';
import { FETCH_CLASSES } from './constants';

function* fetchClasses() {
  const { response, error } = yield call(getClasses);
  if (response) {
    yield put(classes(response));
  } else {
    console.error(error);
    yield put(classesFetchFailed());
  }
}

export function* watchClasses() {
  yield takeLatest(FETCH_CLASSES, fetchClasses);
}
