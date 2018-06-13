import React from 'react';
import { Reservation } from '../../components/reservation';
import { makeReservation } from '../../services';
import LayoutContent from '../../components/LayoutContent';

const ReservationPage = () => (
  <LayoutContent>
    <Reservation onSubmit={makeReservation} />
  </LayoutContent>
);

export default ReservationPage;
