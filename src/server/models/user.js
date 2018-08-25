const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let User;
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

UserSchema.statics.authenticate = (email, password, callback) =>
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      const userNotFoundErr = new Error('User not found.');
      userNotFoundErr.status = 401;
      return callback(err || userNotFoundErr);
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        return callback(null, user);
      }
      return callback();
    });
  });

UserSchema.statics.authenticateByUserId = (userId, callback) => User.findById(userId, callback);

// eslint-disable-next-line no-multi-assign
User = mongoose.model('User', UserSchema);

module.exports = User;
