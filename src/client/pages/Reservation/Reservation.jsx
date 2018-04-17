import React from 'react';
import Calendar from '../../components/calendar';
import { FindReservedClass } from '../../components/checkavailability';

const Reservation = () => (
  <div>
    <FindReservedClass />
    <Calendar />
  </div>
);

export default Reservation;
