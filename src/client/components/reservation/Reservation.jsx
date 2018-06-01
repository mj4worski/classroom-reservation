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
    yourReservations: [],
  };

  onSubmit = () => {
    console.log(this.state);
  };

  handleTimeInputsChange = (event) => {
    const { target } = event;
    const { value, name, type } = target;
    if (type === 'time') {
      this.updateTime(name, value);
    }
    if (type === 'date') {
      this.updateDate(name, value);
    }
  };

  updateDate = (name, value) => {
    const currentlySelectedDay = {
      date: value.getDay(),
      month: value.getMonth(),
      year: value.getYear(),
    };
    const startTime = this.state.startTime.clone();
    const endTime = this.state.endTime.clone();
    startTime.set(currentlySelectedDay);
    endTime.set(currentlySelectedDay);

    this.setState({
      [name]: moment(value),
      startTime,
      endTime,
    }, this.updateYourReservation);
  };

  updateTime = (name, value) => {
    const dayToUpdate = this.state[name].clone();
    dayToUpdate.set('hour', value.split(':')[0]);
    dayToUpdate.set('minute', value.split(':')[1]);
    this.setState({
      [name]: dayToUpdate,
    }, this.updateYourReservation);
  };

  handleClassInputChange = (value) => {
    this.setState({ className: value }, this.updateYourReservation);
  };

  handleNameInput = (event) => {
    const { value } = event.target;
    this.setState({ name: value }, this.updateYourReservation);
  };

  updateYourReservation = () => {
    const {
      className, when, startTime, endTime, name,
    } = this.state;
    if (className !== '' && when.isValid() && startTime.isValid() && endTime.isValid()) {
      this.setState({
        yourReservations: [{
          when: when.toDate(),
          startTime: startTime.toDate(),
          endTime: endTime.toDate(),
          name,
          className,
        }],
      });
    } else {
      this.setState({
        yourReservations: [],
      });
    }
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
          onChange={this.handleTimeInputsChange}
        />
      </label>
    );
  };

  render() {
    const {
      when, startTime, endTime, yourReservations,
    } = this.state;

    return (
      <div className="reservation">
        <div className="reservation__details">
          <span>Szczegóły</span>
          <input type="text" className="form-control" placeholder="Dodaj tytul zdarzenia" onChange={this.handleNameInput} />
          <ClassSearch placeholder="Dodaj lokalizacje" onChangeRequest={this.handleClassInputChange} />
          <div className="reservation-time">
            {this.renderDateInput({ title: 'Data rezerwacji:', name: 'when', date: when })}
            {this.renderDateInput({ title: 'Godzina rozpoczecia:', name: 'startTime', date: startTime }, 'time')}
            {this.renderDateInput({ title: 'Godzina zakończenia:', name: 'endTime', date: endTime }, 'time')}
          </div>
          <button className="btn btn-danger" onClick={this.onSubmit}>Zatwierdz</button>
        </div>
        <div className="reservation__schedule">
          <Schedule title="Harmonogram" yourReservations={yourReservations} />
        </div>
      </div>
    );
  }
}

export default Reservation;
