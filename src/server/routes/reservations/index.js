const reservations = require('express').Router();
const Reservation = require('../../models/reservation');

reservations.get('/', (req, res, next) => {
  // TODO:: Use match from populate
  Reservation.find({}).populate('class').exec((err, reservations) => {
    if (err) {
      return next(err);
    }
    res.json(reservations.filter(reservation => reservation.class.name !== req.query.className));
  });
});

module.exports = reservations;
