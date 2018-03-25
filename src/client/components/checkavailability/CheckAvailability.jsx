import React, { PureComponent } from 'react';
import tick from '../calendar/tick-inside-circle.svg';

import './CheckAvailability.scss';

export default class CheckAvailability extends PureComponent {
  render() {
    return (
      <div className="check-availability">
        <h2 className="check-availability-heading">
          <img src={tick} alt="tick" className="check-availability-heading__tick" />
          <span className="check-availability-heading__text">Sprawdź dostępność</span>
        </h2>
        <div className="check-availability-interactive">
          <label htmlFor="datetime-local-input">
            Termin rezerwacji
            <input
              className="form-control"
              type="datetime-local"
              id="datetime-local-input"
            />
          </label>
          <label htmlFor="example-text-input">
            Sala
            <input className="form-control" type="text" value="Miejsce na sale" id="example-text-input" />
          </label>
          <button type="button" className="btn btn-warning">Sprawdź</button>
        </div>
      </div>
    );
  }
}
