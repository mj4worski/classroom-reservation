import React from 'react';
import { Reservation } from '../../components/reservation';
import { makeReservation } from '../../services';
import './Reservation.scss';

const ReservationPage = () => (
  <div className="reservation-layout">
    <Reservation onSubmit={makeReservation} />
  </div>
);

export default ReservationPage;
