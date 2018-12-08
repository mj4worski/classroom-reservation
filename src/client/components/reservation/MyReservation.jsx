import React, { PureComponent } from 'react';
import { ReservationsType } from './types';

class MyReservation extends PureComponent {
  static propTypes = {
    reservations: ReservationsType,
  };

  static defaultProps = {
    reservations: [],
  }

  render() {
    const { reservations } = this.props;
    return (
      <div>
        <h1>My Reservation</h1>
        <ul>
          {reservations.map(reservation => <li key={reservation._id}>{`Nazwa rezerwacji: ${reservation.name} sala: ${reservation.classroom.name}`}</li>)}
        </ul>
      </div>
    );
  }
}

export default MyReservation;
