const reservations = require('express').Router();
const Reservation = require('../../models/reservation');
const Class = require('../../models/class');

reservations.get('/:classroomName', (req, res, next) => {
  const { classroomName } = req.params;
  Reservation.find({}).populate({
    path: 'classroom',
    match: { name: classroomName },
  }).exec((err, reservations) => {
    if (err) {
      return next(err);
    }
    res.json(reservations.filter(reservation => reservation.classroom));
  });
});

reservations.get('/:classroomName/:date', (req, res, next) => {
  const { classroomName, date } = req.params;
  const dateFromRequest = new Date(date);
  dateFromRequest.setHours(0, 0, 0, 0);
  const nextDay = new Date(dateFromRequest).setDate(dateFromRequest.getDate() + 1);
  Reservation.find({ when: { $gte: dateFromRequest, $lt: nextDay } })
    .populate({
      path: 'classroom',
      match: { name: classroomName },
    }).exec((err, reservations) => {
      if (err) {
        return next(err);
      }
      res.json(reservations.filter(reservation => reservation.classroom));
    });
});

const validateReservation = req => req.body.name
    && req.body.classroomName
    && req.body.when
    && req.body.startTime
    && req.body.endTime;

reservations.post('/', (req, res, next) => {
  if (!validateReservation(req)) {
    const err = new Error('Require all fields to process reservation');
    err.status = 400;
    return next(err);
  }
  Class.findOne({ name: req.body.classroomName }, (err, classDoc) => {
    if (err) {
      return next(err);
    }
    if (!classDoc) {
      const err = new Error('Class not exist in database');
      err.status = 400;
      return next(err);
    }

    Reservation.create({ ...req.body, classroom: classDoc._id }, (err, reservation) => {
      if (err) {
        return next(err);
      }
      return res.json(reservation);
    });
  });
});

module.exports = reservations;
