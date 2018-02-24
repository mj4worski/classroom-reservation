import { SUCCEEDED_REGISTRATION } from './constants';

export const account = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case SUCCEEDED_REGISTRATION:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};
