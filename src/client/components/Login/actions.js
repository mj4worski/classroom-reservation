import { LOG_IN, FAILED_LOG_IN, SUCCEEDED_LOG_IN } from './constants';

export const logIn = user => ({
  type: LOG_IN,
  user,
});

export const succeededLogin = () => ({
  type: SUCCEEDED_LOG_IN,
});

export const failedLogin = () => ({
  type: FAILED_LOG_IN,
});
