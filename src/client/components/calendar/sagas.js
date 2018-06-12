import { call, put, takeLatest } from 'redux-saga/effects';
import { getReservationsByClassName } from '../../services';
import { reservations } from './actions';
import { FETCH_RESERVATIONS } from './constants';

function* fetchReservations({ className }) {
  const fetchedReservations = yield call(getReservationsByClassName, className);
  yield put(reservations(fetchedReservations));
}

export function* watchReservation() {
  yield takeLatest(FETCH_RESERVATIONS, fetchReservations);
}
