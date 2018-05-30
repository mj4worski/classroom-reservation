import React, { Component } from 'react';
import moment from 'moment';
import Schedule from './Schedule';
import ClassSearch from '../ClassSearch';
import './Reservation.scss';

class Reservation extends Component {
  state = {
    when: moment(),
    startTime: moment(),
    endTime: moment(),
    name: '',
    className: '',
  };

  handleInputChange = (event) => {
    const { target } = event;
    const { value, name, type } = target;
    let valueToUpdate = value;

    if (type === 'time') {
      valueToUpdate = this.state.when.clone();
      valueToUpdate.set('hour', value.split(':')[0]);
      valueToUpdate.set('minute', value.split(':')[1]);
    }
    this.setState({
      [name]: moment(valueToUpdate),
    });
  };

  renderDateInput = (props, type = 'date') => {
    const {
      // eslint-disable-next-line react/prop-types
      title, name, date,
    } = props;

    return (
      <label className="date-button" htmlFor={title}>
        {title}
        <input
          name={name}
          id={title}
          type={type}
          className={`btn btn-danger ${type === 'date' ? 'calendar' : 'clock'}`}
          defaultValue={type === 'date' ? date.format('YYYY-MM-DD') : date.format('HH:mm')}
          onChange={this.handleInputChange}
        />
      </label>
    );
  };

  render() {
    const { when, startTime, endTime } = this.state;

    return (
      <div className="reservation">
        <div className="reservation__details">
          <span>Szczegóły</span>
          <input type="text" className="form-control" placeholder="Dodaj tytul zdarzenia" />
          <ClassSearch placeholder="Dodaj lokalizacje" />
          <div className="reservation-time">
            {this.renderDateInput({ title: 'Data rezerwacji:', name: 'when', date: when })}
            {this.renderDateInput({ title: 'Godzina rozpoczecia:', name: 'startTime', date: startTime }, 'time')}
            {this.renderDateInput({ title: 'Godzina zakończenia:', name: 'endTime', date: endTime }, 'time')}
          </div>
        </div>
        <div className="reservation__schedule">
          <Schedule title="Harmonogram" />
        </div>
      </div>
    );
  }
}

export default Reservation;
