import React from 'react';
import Calendar from '../../components/calendar';
import { FindReservedClass } from '../../components/checkavailability';

const Reservation = () => (
  <div className="m-4">
    <FindReservedClass />
    <Calendar />
  </div>
);

export default Reservation;
