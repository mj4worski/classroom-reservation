import React from 'react';
import './Reservation.scss';

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
              Harmonogram
      </div>
    </div>
  );
};

export default Reservation;
