import { CLASSES, SUCCEEDED_UPDATE_CLASS, SUCCEEDED_ADD_CLASS, SUCCEEDED_DELETE_CLASS } from '../sagas';

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
    case SUCCEEDED_DELETE_CLASS:
      return state.filter(classroom => classroom._id !== action.classroomId);
    default:
      return state;
  }
};

export default classes;
