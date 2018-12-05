import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import Board from './Board';
import Schedule from './Schedule';
import ClassSearch from '../classSearch';
import SuccessModal from './SuccessModal';
import FailureModal from './FailureModal';
import { getReservationsByClassNameAndDate } from '../../services';
import './Reservation.scss';

const FAILURE_CONTENT_FOR_VALIDATION = `Nie możesz dokonać rezerwacji ponieważ sala,
 którą chcesz zarezerwować jest już zajęta w danym terminie.`;

/* eslint-disable  max-len */
const checkIfYourReservationIsBetweenExistings =
(yourReservations, existingReservations) => existingReservations.some(existingReservation =>
  (yourReservations.startTime.isBetween(existingReservation.startTime, existingReservation.endTime)
   || yourReservations.endTime.isBetween(existingReservation.startTime, existingReservation.endTime))
   || (yourReservations.startTime.isBefore(existingReservation.startTime)
   && yourReservations.endTime.isAfter(existingReservation.endTime)));
/* eslint-enable max-len */

// TODO:: Refactoring require. Reservation should be splited to follows SRP
class Reservation extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
  };

  state = {
    when: moment(),
    startTime: moment(),
    endTime: moment(),
    name: '',
    classroomName: '',
    yourReservations: [],
    existingReservations: [],
    successModalOpen: false,
    failureModalOpen: false,
    failureModalContent: undefined,
  };

  onTimeChange = (event) => {
    const { target } = event;
    const { value, name, type } = target;
    if (type === 'time') {
      this.updateTime(name, value);
    }
    if (type === 'date') {
      this.updateDate(name, new Date(value));
    }
  };

  onClassroomNameChange = (value) => {
    this.setState({ classroomName: value }, this.updateReservations);
  };

  onReservationNameChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value }, this.updateYourReservations);
  };

  updateDate = (name, date) => {
    const currentlySelectedDay = {
      date: date.getDay(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    const startTime = this.state.startTime.clone();
    const endTime = this.state.endTime.clone();
    startTime.set(currentlySelectedDay);
    endTime.set(currentlySelectedDay);

    this.setState({
      [name]: moment(date),
      startTime,
      endTime,
    }, this.updateReservations);
  };

  updateTime = (name, value) => {
    const dayToUpdate = this.state[name].clone();
    dayToUpdate.set('hour', value.split(':')[0]);
    dayToUpdate.set('minute', value.split(':')[1]);
    this.setState({
      [name]: dayToUpdate,
    }, this.updateYourReservations);
  };

  updateReservations = () => {
    this.updateExistingReservations();
    this.updateYourReservations();
  }

  updateYourReservations = () => {
    const {
      classroomName, when, startTime, endTime, name,
    } = this.state;

    if (when.isValid() && startTime.isValid() && endTime.isValid()) {
      this.setState({
        yourReservations: [{
          when: when.toDate(),
          startTime: startTime.toDate(),
          endTime: endTime.toDate(),
          name,
          classroom: { name: classroomName },
        }],
      });
    }
  };

  updateExistingReservations = () => {
    const {
      classroomName, when,
    } = this.state;

    if (when.isValid()) {
      getReservationsByClassNameAndDate(classroomName, when.toISOString())
        .then(reservations => this.setState({ existingReservations: reservations }));
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add('was-validated');
    if (event.target.checkValidity()) {
      const {
        classroomName, endTime, name, startTime, when, existingReservations,
      } = this.state;

      if (checkIfYourReservationIsBetweenExistings({ startTime, endTime }, existingReservations)) {
        this.setState({
          failureModalOpen: true,
          failureModalContent: FAILURE_CONTENT_FOR_VALIDATION,
        });
        return;
      }
      event.target.classList.remove('was-validated');
      this.props.onSubmit({
        name,
        classroomName,
        when: when.toDate(),
        startTime: startTime.toDate(),
        endTime: endTime.toDate(),
        userId: this.props.userId,
      }, this.reservationSuccess, this.reservationFailure);
    }
  }


  reservationSuccess = () => {
    this.setState({
      existingReservations: [...this.state.existingReservations, ...this.state.yourReservations],
      yourReservations: [],
      name: '',
      successModalOpen: true,
    });
  }

  reservationFailure = () => {
    this.setState({
      failureModalOpen: true,
    });
  }

  closeSuccessModal = () => {
    this.setState({
      successModalOpen: false,
    });
  }

  closeFailureModal = () => {
    this.setState({
      failureModalOpen: false,
      failureModalContent: undefined,
    });
  }

  renderDateInput = (props, type = 'date') => {
    const {
      // eslint-disable-next-line react/prop-types
      title, name, date,
    } = props;

    return (
      <label className="date-button" htmlFor={title}>
        <h6>{title}</h6>
        <input
          name={name}
          id={title}
          type={type}
          className={`btn btn-danger ${type === 'date' ? 'calendar-icon' : 'clock-icon'}`}
          defaultValue={type === 'date' ? date.format('YYYY-MM-DD') : date.format('HH:mm')}
          onChange={this.onTimeChange}
          required
        />
      </label>
    );
  };

  render() {
    const {
      name,
      when,
      startTime,
      endTime,
      yourReservations,
      existingReservations,
      successModalOpen,
      failureModalOpen,
      failureModalContent,
    } = this.state;

    return (
      <div className="reservation">
        <div className="reservation__details">
          <form noValidate onSubmit={this.handleFormSubmit}>
            <h3>Szczegóły dotyczace rezerwacji</h3>
            <div className="form-group">
              <label className="form-control-label d-block" htmlFor="eventName">
                <h6>Tytuł zdarzenia</h6>
                <input
                  type="text"
                  id="eventName"
                  className="form-control form-control-danger"
                  placeholder="Dodaj tytuł zdarzenia"
                  value={name}
                  onChange={this.onReservationNameChange}
                  required
                />
                <div className="invalid-feedback">
                  Proszę uzupelnić tytuł zdarzenia
                </div>
              </label>
            </div>
            <div className="form-group">
              <ClassSearch
                label="Sala"
                errorMessage="Proszę wybrać salę"
                placeholder="Dodaj lokalizacje"
                onChangeRequest={this.onClassroomNameChange}
              />
            </div>
            <div className="reservation-time">
              {this.renderDateInput({ title: 'Data rezerwacji:', name: 'when', date: when })}
              {this.renderDateInput({ title: 'Godzina rozpoczecia:', name: 'startTime', date: startTime }, 'time')}
              {this.renderDateInput({ title: 'Godzina zakończenia:', name: 'endTime', date: endTime }, 'time')}
            </div>
            <button className="btn btn-danger">Zatwierdź</button>
          </form>
          <Board />
        </div>
        <div className="reservation__schedule">
          <Schedule title="Harmonogram" yourReservations={yourReservations} existingReservations={existingReservations} />
        </div>
        <SuccessModal open={successModalOpen} onCloseRequest={this.closeSuccessModal} />
        <FailureModal
          open={failureModalOpen}
          onCloseRequest={this.closeFailureModal}
          content={failureModalContent}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ account }) => ({
  userId: account.id,
});

export default connect(mapStateToProps, null)(Reservation);
