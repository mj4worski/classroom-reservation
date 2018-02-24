import { REGISTRATION, FAILED_REGISTRATION, SUCCEEDED_REGISTRATION } from './constants';

export const registration = user => ({
  type: REGISTRATION,
  user,
});

export const succeededLogin = () => ({
  type: SUCCEEDED_REGISTRATION,
});

export const failedLogin = () => ({
  type: FAILED_REGISTRATION,
});
