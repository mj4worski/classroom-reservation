/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ReservationsType } from './types';

class MyReservation extends PureComponent {
  static propTypes = {
    reservations: ReservationsType.isRequired,
    date: PropTypes.shape({
      date: PropTypes.number.isRequired,
      months: PropTypes.number.isRequired,
      years: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { reservations, date } = this.props;
    return (
      <div>
        <h1>Moje rezerwacje dla dnia: {`${date.date}-${date.months}-${date.years}`} </h1>
        <ul>
          {reservations.map(reservation => <li key={reservation._id}>{`Nazwa rezerwacji: ${reservation.name} sala: ${reservation.classroom.name}`}</li>)}
        </ul>
      </div>
    );
  }
}

export default MyReservation;
