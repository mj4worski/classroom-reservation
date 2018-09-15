import { call, put, takeLatest } from 'redux-saga/effects';
import { getClasses } from '../../../services/index';

const FETCH_CLASSES = 'FETCH_CLASSES';
export const FETCH_CLASSES_FAILED = 'FETCH_CLASSES_FAILED';
export const CLASSES = 'CLASSES';

export const fetchClasses = () => ({
  type: FETCH_CLASSES,
});

const classes = classes => ({
  type: CLASSES,
  classes,
});

const classesFetchFailed = () => ({
  type: FETCH_CLASSES_FAILED,
});

export function* watchClasses() {
  yield takeLatest(FETCH_CLASSES, function* () {
    const { response } = yield call(getClasses);
    if (response) {
      yield put(classes(response));
    } else {
      yield put(classesFetchFailed());
    }
  });
}
