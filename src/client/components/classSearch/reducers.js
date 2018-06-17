import { CLASSES } from './constants';

export const classes = (state = [], action) => {
  switch (action.type) {
    case CLASSES:
      return [...action.classes];
    default:
      return state;
  }
};
