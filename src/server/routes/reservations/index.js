const reservations = require('express').Router();
const Reservation = require('../../models/reservation');
const Class = require('../../models/class');

reservations.get('/', (req, res, next) => {
  // TODO:: Use match from populate
  Reservation.find({}).populate('class').exec((err, reservations) => {
    if (err) {
      return next(err);
    }
    res.json(reservations.filter(reservation => reservation.class.name !== req.query.className));
  });
});

const validateReservation = req => req.body.name
    && req.body.className
    && req.body.when
    && req.body.startTime
    && req.body.endTime;

reservations.post('/', (req, res, next) => {
  if (!validateReservation(req)) {
    const err = new Error('Require all fields to process reservation');
    err.status = 400;
    return next(err);
  }
  Class.findOne({ name: req.body.className }, (err, classDoc) => {
    if (err) {
      return next(err);
    }
    if (!classDoc) {
      const err = new Error('Class not exist in database');
      err.status = 400;
      return next(err);
    }

    Reservation.create({ ...req.body, className: classDoc._id }, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).end();
    });
  });
});

module.exports = reservations;
