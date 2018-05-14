import { call, put, takeLatest } from 'redux-saga/effects';
import { getReservations } from '../../services';
import { reservations } from './actions';
import { FETCH_RESERVATIONS } from './constants';

const mapTimeStringToDateObject = (key, value) => {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
};

function* fetchReservations({ className }) {
  const fetchedReservations = yield call(getReservations, className);
  yield put(reservations(JSON.parse(fetchedReservations, mapTimeStringToDateObject)));
}

export function* watchReservation() {
  yield takeLatest(FETCH_RESERVATIONS, fetchReservations);
}
