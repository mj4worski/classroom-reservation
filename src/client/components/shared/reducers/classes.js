import { CLASSES } from '../sagas';

const classes = (state = [], action) => {
  switch (action.type) {
    case CLASSES:
      return [...action.classes];
    default:
      return state;
  }
};

export default classes;
