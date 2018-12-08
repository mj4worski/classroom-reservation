/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ReservationsType } from './types';
import './MyReservation.scss';

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
      <div className="my-reservation">
        <h1 className="my-reservation__header">Moje rezerwacje dla dnia: {`${date.date}-${date.months}-${date.years}`} </h1>
        <div className="my-reservation__content">
          <div>
          Rezerwacje w danym dniu:
            <ul>
              {reservations.map(reservation => <li key={reservation._id}>{reservation.name}</li>)}
            </ul>
          </div>
          <div>
          Bla bla bla bla bla bla bla
          </div>
        </div>
      </div>
    );
  }
}

export default MyReservation;
