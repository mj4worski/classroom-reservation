import { REGISTRATION, FAILED_REGISTRATION, SUCCEEDED_REGISTRATION } from './constants';

export const registration = user => ({
  type: REGISTRATION,
  user,
});

export const succeededRegistration = () => ({
  type: SUCCEEDED_REGISTRATION,
});

export const failedRegistration = () => ({
  type: FAILED_REGISTRATION,
});
