import { CLASSES, FETCH_CLASSES, FETCH_CLASSES_FAILED } from './constants';

export const fetchClasses = () => ({
  type: FETCH_CLASSES,
});

export const classes = classes => ({
  type: CLASSES,
  classes,
});

export const classesFetchFailed = () => ({
  type: FETCH_CLASSES_FAILED,
});
