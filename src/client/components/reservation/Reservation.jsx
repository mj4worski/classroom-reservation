import React from 'react';
import Schedule from './Schedule';
import './Reservation.scss';

const existingReservationMock = [
  {
    name: 'Reservation 1',
    startTime: new Date(2018, 4, 10, 7, 0),
    endTime: new Date(2018, 4, 10, 8, 0),
  },
  {
    name: 'Reservation 1',
    startTime: new Date(2018, 4, 10, 8, 45),
    endTime: new Date(2018, 4, 10, 9, 15),
  },
  {
    name: 'Reservation 1',
    startTime: new Date(2018, 4, 10, 12, 15),
    endTime: new Date(2018, 4, 10, 13, 30),
  },
];

const yourReservationsMock = [
  {
    name: 'Reservation 1',
    startTime: new Date(2018, 4, 10, 13, 0),
    endTime: new Date(2018, 4, 10, 14, 0),
  },
  {
    name: 'Reservation 1',
    startTime: new Date(2018, 4, 10, 14, 45),
    endTime: new Date(2018, 4, 10, 15, 15),
  },
  {
    name: 'Reservation 1',
    startTime: new Date(2018, 4, 10, 16, 15),
    endTime: new Date(2018, 4, 10, 18, 30),
  },
];

const DateDropdown = ({ date }) => (
  <label className="date-button date-button--large" htmlFor="today">
      Dzien rezerwacji:
    <input id="today" type="date" className="btn btn-danger calendar" value={date.toISOString().substr(0, 10)} />
  </label>
);

const TimeStart = ({ date }) => (
  <label className="date-button" htmlFor="timeStart">
      Godzina rozpoczecia:
    <input id="timeStart" type="time" step="900" className="btn btn-danger clock" defaultValue="12:00" />
  </label>
);

const TimeEnd = ({ date }) => (
  <label className="date-button" htmlFor="timeEnd">
      Godzina zakończenia:
    <input id="timeEnd" type="time" step="900" className="btn btn-danger clock" defaultValue="12:00" />
  </label>
);

const Reservation = () => {
  const date = new Date();

  return (
    <div className="reservation">
      <div className="reservation__details">
        <span>Szczegóły</span>
        <input type="text" className="form-control" placeholder="Dodaj tytul zdarzenia" />
        <input type="text" className="form-control" placeholder="Dodaj lokalizacje" />
        <div className="reservation-time">
          <DateDropdown date={date} />
          <TimeStart date={date} />
          <TimeEnd date={date} />
        </div>
      </div>
      <div className="reservation__schedule">
        <Schedule
          title="Harmonogram"
          existingReservations={existingReservationMock}
          yourReservations={yourReservationsMock}
        />
      </div>
    </div>
  );
};

export default Reservation;
