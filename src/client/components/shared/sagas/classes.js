import { call, put, takeLatest } from 'redux-saga/effects';
import { getClasses, updateClass as updateClassService } from '../../../services';

const FETCH_CLASSES = 'FETCH_CLASSES';
const UPDATE_CLASS = 'UPDATE_CLASS';
export const SUCCEEDED_UPDATE_CLASS = 'SUCCEEDED_UPDATE_CLASS';
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

export const updateClass = classroom => ({
  type: UPDATE_CLASS,
  classroom,
});

const succeededUpdateClass = classroom => ({
  type: SUCCEEDED_UPDATE_CLASS,
  classroom,
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

export function* watchUpdateClass() {
  yield takeLatest(UPDATE_CLASS, function* ({ classroom }) {
    const status = yield call(updateClassService, classroom);
    if (status === 200) {
      yield put(succeededUpdateClass(classroom));
    }
    // TODO:: Add error handling
  });
}
