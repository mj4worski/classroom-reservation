import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getReservationsByClassName, getReservationsAssigneToUser } from '../../services';
import { getUserId } from '../shared/reducers';
import { reservations } from './actions';
import { FETCH_RESERVATIONS, FETCH_RESERVATIONS_BY_USER_ID } from './constants';

function* fetchReservationsByClassName({ className }) {
  const fetchedReservations = yield call(getReservationsByClassName, className);
  yield put(reservations(fetchedReservations));
}

function* fetchReservationsByUserId() {
  const userId = yield select(getUserId);
  const fetchedReservations = yield call(getReservationsAssigneToUser, userId);
  yield put(reservations(fetchedReservations));
}

export function* watchReservation() {
  yield takeLatest(FETCH_RESERVATIONS, fetchReservationsByClassName);
}

export function* watchReservationByUserId() {
  yield takeLatest(FETCH_RESERVATIONS_BY_USER_ID, fetchReservationsByUserId);
}
