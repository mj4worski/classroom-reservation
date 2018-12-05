import { REGISTRATION, FAILED_REGISTRATION, SUCCEEDED_REGISTRATION } from './constants';

export const registration = user => ({
  type: REGISTRATION,
  user,
});

export const succeededRegistration = user => ({
  type: SUCCEEDED_REGISTRATION,
  user,
});

export const failedRegistration = () => ({
  type: FAILED_REGISTRATION,
});
