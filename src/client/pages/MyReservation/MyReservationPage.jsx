import React from 'react';
import { MyReservation } from '../../components/reservation';
import LayoutContent from '../../components/shared/LayoutContent';

const MyReservationPage = props => (
  <LayoutContent>
    <MyReservation reservations={props.location.state.reservations} />
  </LayoutContent>
);


export default MyReservationPage;
