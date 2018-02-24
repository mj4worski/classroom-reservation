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

UserSchema.statics.authenticate = function (email, password, callback) {
  return User.findOne({ email })
    .exec((err, user) => {
      if (err || !user) {
        const userNotFoundErr = new Error('User not found.');
        userNotFoundErr.status = 401;
        return callback(err || userNotFoundErr);
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          return callback(null, user);
        }
        return callback();
      });
    });
};

User = mongoose.model('User', UserSchema);

module.exports = User;
