/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tiles from '../Tiles';
import MyReservationForm from './MyReservationForm';
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
          <Tiles items={reservations}>
            {
        date => (
          <MyReservationForm
            {...date}
          />)
        }
          </Tiles>
        </div>
      </div>
    );
  }
}

export default MyReservation;
