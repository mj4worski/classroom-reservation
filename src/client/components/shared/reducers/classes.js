import { CLASSES, SUCCEEDED_UPDATE_CLASS, SUCCEEDED_ADD_CLASS } from '../sagas';

const classes = (state = [], action) => {
  switch (action.type) {
    case CLASSES:
      return [...action.classes];
    case SUCCEEDED_UPDATE_CLASS: {
      const { classroom: updatedClassroom } = action;
      return state.map((classroom) => {
        if (classroom._id !== updatedClassroom._id) {
          return classroom;
        }
        return {
          ...updatedClassroom,
        };
      });
    }
    case SUCCEEDED_ADD_CLASS:
      return [...state, action.classroom];
    default:
      return state;
  }
};

export default classes;
