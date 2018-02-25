import { SUCCEEDED_REGISTRATION } from './constants';
import { SUCCEEDED_LOG_IN } from '../Login';

export const account = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case SUCCEEDED_LOG_IN:
    case SUCCEEDED_REGISTRATION:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};
