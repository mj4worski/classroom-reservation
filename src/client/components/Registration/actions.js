import { REGISTRATION, FAILED_REGISTRATION, SUCCEEDED_REGISTRATION } from './constants';

export const registration = user => ({
  type: REGISTRATION,
  user,
});

export const succeededRegistration = email => ({
  type: SUCCEEDED_REGISTRATION,
  email,
});

export const failedRegistration = () => ({
  type: FAILED_REGISTRATION,
});
