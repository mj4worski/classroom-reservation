const users = require('express').Router();
const User = require('../../models/user');

users.post('/registration', (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    User.create({ email, password }, (error) => {
      if (error) {
        return next(error);
      }
      return res.status(200).end();
    });
  } else {
    const err = new Error('All fields required');
    err.status = 400;
    return res.json({ registration: true });
  }
});

users.get('/rememberMe', (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).end();
  }
  User.authenticateByUserId(req.session.userId, (error, user) => {
    if (error) {
      const err = new Error('Error on server');
      err.status = 500;
      return next(err);
    }
    if (!user) {
      delete req.session.userId;
      return res.status(401).end();
    }
    req.session.userId = user._id;
    return res.json({ email: user.email, logIn: true });
  });
});

users.post('/login', (req, res, next) => {
  const { email, password, rememberMe } = req.body;
  if (!email || !password) {
    const err = new Error('All fields required');
    err.status = 400;
    return next(err);
  }

  User.authenticate(email, password, (error, user) => {
    if (error || !user) {
      const err = new Error('Wrong email or password.');
      err.status = 401;
      return next(err);
    }
    if (rememberMe) {
      req.session.userId = user._id;
    }
    return res.status(200).end();
  });
});

users.get('/logout', (req, res, next) => {
  if (!req.session) {
    return res.status(200).end();
  }
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    return res.status(200).end();
  });
});

module.exports = users;
