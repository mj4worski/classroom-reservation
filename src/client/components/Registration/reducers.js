import { SUCCEEDED_REGISTRATION } from './constants';
import { SUCCEEDED_LOG_IN, FAILED_LOG_IN, LOG_IN } from '../Login';

export const account = (state = { loggedIn: false, failedLogIn: false }, action) => {
  switch (action.type) {
    case SUCCEEDED_LOG_IN:
    case SUCCEEDED_REGISTRATION:
      return { ...state, loggedIn: true, failedLogIn: false };
    case LOG_IN:
      return { ...state, failedLogIn: false };
    case FAILED_LOG_IN:
      return { ...state, failedLogIn: true };
    default:
      return state;
  }
};
