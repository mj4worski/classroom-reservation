const express = require('express');
const User = require('../models/user');
const Class = require('../models/class');
const Reservation = require('../models/reservation');

// TODO:: Split route to separate files.

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.post('/registration', (req, res, next) => {
  if (req.body.email && req.body.password) {
    User.create({ email: req.body.email, password: req.body.password }, (error, user) => {
      if (error) {
        return next(error);
      }
      req.session.userId = user._id;
      return res.status(200).end();
    });
  } else {
    const err = new Error('All fields required');
    err.status = 400;
    return res.json({ registration: true });
  }
});

router.post('/login', (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    const err = new Error('All fields required');
    err.status = 400;
    return next(err);
  }
  User.authenticate(req.body.email, req.body.password, (error, user) => {
    if (error || !user) {
      const err = new Error('Wrong email or password.');
      err.status = 401;
      return next(err);
    }
    req.session.userId = user._id;
    return res.status(200).end();
  });
});


// GET for logout logout
router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  }
});

router.get('/classes', (req, res, next) => {
  Class.find({}, (error, classes) => {
    if (error) {
      const err = new Error('Problem with downloading Classes for Reservation');
      err.status = 500;
      return next(err);
    }
    res.json(classes);
  });
});

router.get('/reservations', (req, res, next) => {
  // TODO:: Use match from populate
  Reservation.find({}).populate('class').exec((err, reservations) => {
    if (err) {
      return next(err);
    }
    res.json(reservations.filter(reservation => reservation.class.name !== req.query.className));
  });
});

module.exports = router;
