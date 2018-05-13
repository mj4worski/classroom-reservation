import { FETCH_RESERVATIONS, RESERVATIONS } from './constants';

export const fetchReservations = className => ({
  type: FETCH_RESERVATIONS,
  className,
});

export const reservations = reservations => ({
  type: RESERVATIONS,
  reservations,
});
