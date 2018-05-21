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
  <div className="dropdown">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {date}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
);

const TimeStart = ({ hour }) => (
  <div className="dropdown">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {hour}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
);

const TimeEnd = ({ hour }) => (
  <div className="dropdown">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {hour}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
);

const Reservation = () => {
  const date = new Date();

  return (
    <div className="reservation">
      <div className="reservation__details">
            Szczegóły
        <div>
          <input type="text" className="form-control" placeholder="Dodaj tytul zdarzenia" />
          <input type="text" className="form-control" placeholder="Dodaj lokalizacje" />
          <div className="reservation-time">
            <DateDropdown date={date.toString()} />
            <TimeStart hour={date.getHours()} />
            <TimeEnd hour={date.getHours() + 1} />
          </div>
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
