const classes = require('express').Router();
const Class = require('../../models/class');

const handleError = (message, next) => {
  const err = new Error(message);
  err.status = 500;
  return next(err);
};

classes.get('/', (req, res, next) => {
  Class.find({}, (error, classes) => {
    if (error) {
      const err = new Error('Problem with downloading Classes for Reservation');
      err.status = 500;
      return next(err);
    }
    res.json(classes);
  });
});

classes.post('/edit', (req, res, next) => {
  const {
    classroom,
  } = req.body;
  Class.findById(classroom._id, (error, classroomEntity) => {
    if (error) {
      return handleError('Problem with updating Classroom', next);
    }
    // eslint-disable-next-line no-param-reassign
    classroomEntity.name = classroom.name;

    classroomEntity.save((error, updatedClassroom) => {
      if (error) {
        return handleError('Problem with updating Classroom', next);
      }
      res.send(updatedClassroom);
    });
  });
});

classes.post('/', (req, res, next) => {
  const {
    classroom,
  } = req.body;
  if (!classroom.name) {
    const err = new Error('Require classroom name');
    err.status = 400;
    return next(err);
  }
  Class.create(classroom, (err, classroomEntity) => {
    if (err) {
      return next(err);
    }
    res.json(classroomEntity);
  });
});

module.exports = classes;
