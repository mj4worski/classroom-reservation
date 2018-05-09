const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;
