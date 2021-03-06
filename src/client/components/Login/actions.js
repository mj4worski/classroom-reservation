import { LOG_IN, FAILED_LOG_IN, SUCCEEDED_LOG_IN, REMEMBER_ME } from './constants';

export const logIn = user => ({
  type: LOG_IN,
  user,
});

export const succeededLogin = user => ({
  type: SUCCEEDED_LOG_IN,
  user,
});

export const failedLogin = () => ({
  type: FAILED_LOG_IN,
});

export const rememberMe = () => ({
  type: REMEMBER_ME,
});
