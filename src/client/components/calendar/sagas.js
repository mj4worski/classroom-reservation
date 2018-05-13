import { call, put, takeLatest } from 'redux-saga/effects';
import { getReservations } from '../../services';
import { reservations } from './actions';
import { FETCH_RESERVATIONS } from './constants';

function* fetchReservations({ className }) {
  const fetchedReservations = yield call(getReservations, className);
  yield put(reservations(fetchedReservations));
}

export function* watchReservation() {
  yield takeLatest(FETCH_RESERVATIONS, fetchReservations);
}
