import { FETCH_CLASSES_FAILED } from '../../classSearch';

// TODO:: Move it!
export const errors = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CLASSES_FAILED:
      return {
        ...state,
        classes: true,
      };
    default:
      return state;
  }
};
