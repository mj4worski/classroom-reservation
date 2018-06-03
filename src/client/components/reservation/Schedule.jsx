import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { reservationsType } from './types';
import './Schedule.scss';

// eslint-disable-next-line react/prop-types
const ScheduleCell = ({ hour }) => (
  <div className="schedule-cell">
    {hour}
  </div>
);

const ScheduleItemHeight = 60;

const calculatePosition = (startTime, endTime) => ({
  top: calculateTopPosition(startTime),
  height: calculateHeight(startTime, endTime),
});

const calculateTopPosition = startTime => `${(startTime.getHours() + (startTime.getMinutes() / 60)) * ScheduleItemHeight}px`;

const calculateHeight = (startTime, endTime) => {
  const diffInHours = (endTime.getTime() - startTime.getTime()) / (60 * 60 * 1000);
  return `${diffInHours * ScheduleItemHeight}px`;
};

export default class Schedule extends Component {
  static propTypes = {
    existingReservations: reservationsType,
    yourReservations: reservationsType,
    title: PropTypes.string,
  };

   static defaultProps = {
     existingReservations: [],
     yourReservations: [],
     title: '',
   };

  renderReservations = (existingReservations, visualCssClass = '') => {
    if (existingReservations.length > 0) {
      return (
        <Fragment>
          {existingReservations.map(reservation => (
            <div
              key={reservation.name + reservation.endTime}
              className={`schedule-reservation ${visualCssClass}`}
              style={calculatePosition(reservation.startTime, reservation.endTime)}
            >
              {reservation.name}
            </div>
              ))}
        </Fragment>
      );
    }
    return null;
  };

  renderScheduleCells = () => {
    const cells = [];
    for (let i = 0; i < 24; i += 1) {
      cells.push(<ScheduleCell key={i} hour={i} />);
    }
    return cells;
  };

  render() {
    const { existingReservations, yourReservations, title } = this.props;

    return (
      <div className="schedule">
        <h3 className="schedule__title">{title}</h3>
        <div className="schedule__content">
          {this.renderScheduleCells()}
          {this.renderReservations(existingReservations, 'schedule-reservation--existing')}
          {this.renderReservations(yourReservations, 'schedule-reservation--your')}
        </div>
      </div>
    );
  }
}
