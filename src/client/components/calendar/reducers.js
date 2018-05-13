import { RESERVATIONS } from './constants';

export const reservations = (state = [], action) => {
  switch (action.type) {
    case RESERVATIONS:
      return Array.from(Object.create(action.reservation));
    default:
      return state;
  }
};
