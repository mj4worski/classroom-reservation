const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReservationSchema = Schema({
  when: { type: Date, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  name: String,
  class: { type: Schema.Types.ObjectId, ref: 'Class' },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;
