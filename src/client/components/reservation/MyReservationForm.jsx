import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './MyReservationForm.scss';

class MyReservationForm extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    _id: PropTypes.string,
    active: PropTypes.bool,
    onEditSubmit: PropTypes.func.isRequired,
    onDeleteRequested: PropTypes.func.isRequired,
    reservation: PropTypes.shape({
      startTime: PropTypes.instanceOf(Date).isRequired,
      endTime: PropTypes.instanceOf(Date).isRequired,
      className: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    active: false,
    label: '',
    _id: '',
  };

  state = {
    classroomName: this.props.label,
  };

  handleEditSubmit = () => {
    const { onEditSubmit, _id } = this.props;
    onEditSubmit({ name: this.state.classroomName, _id });
  };

  handleClassNameChange = (event) => {
    this.setState({ classroomName: event.target.value });
  };

  handleClassroomDelete = () => {
    const { onDeleteRequested, _id } = this.props;
    onDeleteRequested(_id);
  };

  render() {
    const {
      label, active, _id, reservation,
    } = this.props;
    const { classroomName } = this.state;

    return (
      <div
        className={`tab-pane administration-form ${active ? 'show active' : ''}`}
        id={_id}
        role="tabpanel"
      >
        <h4>{label}</h4>
        <label
          htmlFor="class-field-edit"
          className="administration-form__input"
        >
          <h6>Zmień nazwę rezerwacji sale</h6>
          <div className="form-inline">
            <input
              value={classroomName}
              type="text"
              className="form-control flex-grow-1"
              id="class-field-edit"
              placeholder="Edytuj sale"
              onChange={this.handleClassNameChange}
            />
            <button
              type="submit"
              className="btn btn-danger m-lg-1"
              onClick={this.handleEditSubmit}
            >
                  Zatwierdź zmianę nazwy
            </button>
          </div>
        </label>


        <label
          htmlFor="class-field-edit"
          className="administration-form__input"
        >
          <h6>Rezerwacja dotyczy sali</h6>
          <div className="form-inline">
            <input
              value={reservation.className}
              type="text"
              className="form-control flex-grow-1"
              id="class-field-edit"
              disabled
            />
          </div>
        </label>

        <label
          htmlFor="class-field-edit"
          className="administration-form__input"
        >
          <h6>Czas trwania rezerwacji</h6>
          <div className="form-inline">
            <input
              value={moment(reservation.startTime).format('hh:mm')}
              type="text"
              className="form-control flex-grow-1"
              id="class-field-edit"
              disabled
            />
            <input
              value={moment(reservation.endTime).format('hh:mm')}
              type="text"
              className="form-control flex-grow-1"
              id="class-field-edit"
              disabled
            />
          </div>
        </label>

        <div className="d-flex">
          <span className="font-weight-bold flex-grow-1">
            Usuń rezerwacje.
          </span>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={this.handleClassroomDelete}
          >
            Usuń sale
          </button>
        </div>
      </div>
    );
  }
}

export default MyReservationForm;
