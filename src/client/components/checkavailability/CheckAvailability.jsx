/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import moment from 'moment';
import tick from '../calendar/tick-inside-circle.svg';

import './CheckAvailability.scss';

const inputDate = 'date';
const inputTime = 'time';
const inputText = 'text';

export default class CheckAvailability extends PureComponent {
  state = {
    [inputDate]: moment().format(moment.HTML5_FMT.DATE),
    [inputTime]: moment().format(moment.HTML5_FMT.TIME),
    [inputText]: 'Miejsce na sale',
  };

  handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="check-availability">
        <h2 className="check-availability-heading">
          <img src={tick} alt="tick" className="check-availability-heading__tick" />
          <span className="check-availability-heading__text">
            Sprawdź dostępność
          </span>
        </h2>
        <form className="form-inline" onSubmit={this.handleSubmit}>

          <div className="form-group m-1">
            <label className="mr-2" htmlFor="datetime-local-input">
              Termin rezerwacji
            </label>
            <input
              name={inputDate}
              className="form-control"
              type="date"
              id="datetime-local-input"
              value={this.state[inputDate]}
              onChange={this.handleInputChange}
            />
            <input
              name={inputTime}
              className="form-control"
              type="time"
              id="datetime-local-input"
              value={this.state[inputTime]}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group m-1">
            <label className="mr-2" htmlFor="example-text-input">
              Sala
            </label>
            <input
              name={inputText}
              className="form-control"
              type="text"
              value={this.state[inputText]}
              id="example-text-input"
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-warning">Sprawdź</button>
        </form>
      </div>
    );
  }
}
