import { call, put, takeLatest } from 'redux-saga/effects';
import { getClasses, updateClass as updateClassService, addClass as addClassService } from '../../../services';

const FETCH_CLASSES = 'FETCH_CLASSES';
const UPDATE_CLASS = 'UPDATE_CLASS';
const ADD_CLASS = 'ADD_CLASS';
export const SUCCEEDED_UPDATE_CLASS = 'SUCCEEDED_UPDATE_CLASS';
export const FETCH_CLASSES_FAILED = 'FETCH_CLASSES_FAILED';
export const CLASSES = 'CLASSES';
export const SUCCEEDED_ADD_CLASS = 'SUCCEEDED_ADD_CLASS';

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

export const addClass = classroom => ({
  type: ADD_CLASS,
  classroom,
});

const succeededAddClass = classroom => ({
  type: SUCCEEDED_ADD_CLASS,
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
    const { response } = yield call(updateClassService, classroom);
    if (response) {
      yield put(succeededUpdateClass(response));
    }
    // TODO:: Add error handling
  });
}

export function* watchAddClass() {
  yield takeLatest(ADD_CLASS, function* ({ classroom }) {
    const { response } = yield call(addClassService, classroom);
    if (response) {
      yield put(succeededAddClass(response));
    }
  });
}
