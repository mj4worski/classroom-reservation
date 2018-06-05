const classes = require('express').Router();
const Class = require('../../models/class');

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

module.exports = classes;
