import React from 'react';
import { Reservation } from '../../components/reservation';
import { makeReservation } from '../../services';
import LayoutContent from '../../components/shared/LayoutContent';
import './Reservation.scss';

const ReservationPage = () => (
  <LayoutContent className="reservation-page">
    <Reservation onSubmit={makeReservation} />
  </LayoutContent>
);

export default ReservationPage;
