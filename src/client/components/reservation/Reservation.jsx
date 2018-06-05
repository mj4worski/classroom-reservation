import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Schedule from './Schedule';
import ClassSearch from '../ClassSearch';
import './Reservation.scss';

class Reservation extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    when: moment(),
    startTime: moment(),
    endTime: moment(),
    name: '',
    className: '',
    yourReservations: [],
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

  handleFormSubmit = (event) => {
    event.target.classList.add('was-validated');
    if (event.target.checkValidity()) {
      const {
        className, endTime, name, startTime, when,
      } = this.state;
      this.props.onSubmit({
        name,
        className,
        when: when.toDate(),
        startTime: startTime.toDate(),
        endTime: endTime.toDate(),
      });
    }
    event.preventDefault();
    event.stopPropagation();
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
          className={`btn btn-danger ${type === 'date' ? 'calendar-icon' : 'clock-icon'}`}
          defaultValue={type === 'date' ? date.format('YYYY-MM-DD') : date.format('HH:mm')}
          onChange={this.handleTimeInputsChange}
          required
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
          <form noValidate onSubmit={this.handleFormSubmit}>
            <h3>Szczegóły dotyczace rezerwacji</h3>
            <div className="form-group">
              <label className="form-control-label d-block" htmlFor="eventName">
                Tytuł zdarzenia
                <input
                  type="text"
                  id="eventName"
                  className="form-control form-control-danger"
                  placeholder="Dodaj tytuł zdarzenia"
                  onChange={this.handleNameInput}
                  required
                />
                <div className="invalid-feedback">
                  Proszę uzupelnić tytuł zdarzenia
                </div>
              </label>
            </div>
            <div className="form-group">
              <ClassSearch label="Sala" errorMessage="Proszę wybrać salę" placeholder="Dodaj lokalizacje" onChangeRequest={this.handleClassInputChange} />
            </div>
            <div className="reservation-time">
              {this.renderDateInput({ title: 'Data rezerwacji:', name: 'when', date: when })}
              {this.renderDateInput({ title: 'Godzina rozpoczecia:', name: 'startTime', date: startTime }, 'time')}
              {this.renderDateInput({ title: 'Godzina zakończenia:', name: 'endTime', date: endTime }, 'time')}
            </div>
            <button className="btn btn-danger">Zatwierdź</button>
          </form>
        </div>
        <div className="reservation__schedule">
          <Schedule title="Harmonogram" yourReservations={yourReservations} />
        </div>
      </div>
    );
  }
}

export default Reservation;
