import { SUCCEEDED_REGISTRATION } from './constants';
import { SUCCEEDED_LOG_IN, FAILED_LOG_IN, LOG_IN } from '../Login';
import { SUCCEEDED_LOG_OUT } from '../Logout';

const defaultState = { loggedIn: false, failedLogIn: false, email: '' };

export const account = (state = defaultState, action) => {
  const { type, email } = action;
  switch (type) {
    case SUCCEEDED_LOG_IN:
    case SUCCEEDED_REGISTRATION:
      return {
        ...state, loggedIn: true, failedLogIn: false, email,
      };
    case LOG_IN:
      return { ...state, failedLogIn: false };
    case FAILED_LOG_IN:
      return { ...state, failedLogIn: true };
    case SUCCEEDED_LOG_OUT:
      return { ...state, loggedIn: false, email: '' };
    default:
      return state;
  }
};
