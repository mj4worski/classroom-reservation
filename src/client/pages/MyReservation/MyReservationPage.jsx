import React from 'react';
import { MyReservation } from '../../components/reservation';
import LayoutContent from '../../components/shared/LayoutContent';

const MyReservationPage = props => (
  <LayoutContent>
    <MyReservation {...props.location.state} />
  </LayoutContent>
);


export default MyReservationPage;
