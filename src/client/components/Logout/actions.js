import { LOG_OUT, FAILED_LOG_OUT, SUCCEEDED_LOG_OUT } from './constants';

export const logOut = () => ({
  type: LOG_OUT,
});

export const succeededLogout = () => ({
  type: SUCCEEDED_LOG_OUT,
});

export const failedLogout = () => ({
  type: FAILED_LOG_OUT,
});
