import { FETCH_RESERVATIONS, RESERVATIONS, FETCH_RESERVATIONS_BY_USER_ID } from './constants';

export const fetchReservations = className => ({
  type: FETCH_RESERVATIONS,
  className,
});

export const reservations = reservations => ({
  type: RESERVATIONS,
  reservations,
});

export const fetchReservationsByUserId = () => ({
  type: FETCH_RESERVATIONS_BY_USER_ID,
});
