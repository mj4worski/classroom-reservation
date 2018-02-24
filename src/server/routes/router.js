const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.post('/registration', (req, res, next) => {
  if (req.body.email && req.body.password) {
    User.create({ email: req.body.email, password: req.body.password }, (error, user) => {
      if (error) {
        return next(error);
      }
      req.session.userId = user._id;
      return res;
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
    return res.status(200);
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

module.exports = router;
