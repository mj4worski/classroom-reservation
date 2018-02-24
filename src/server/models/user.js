/* eslint-disable no-shadow,consistent-return */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});



UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.statics.authenticate = function (email, password, callback) {
  return User.findOne({ email })
    .exec((err, user) => {
      if (err) return callback(err);
      else if (!user) {
        const errorUserNotFound = new Error('User not found.');
        errorUserNotFound.status = 401;
        return callback(errorUserNotFound);
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          return callback(null, user);
        }
        return callback();
      });
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
