import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './AdministrationForm.scss';

class AdministrationForm extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    _id: PropTypes.string,
    active: PropTypes.bool,
    onEditSubmit: PropTypes.func.isRequired,
    onDeleteRequested: PropTypes.func.isRequired,
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
    const { label, active, _id } = this.props;
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
          <h6>Edytuj sale</h6>
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
        <div className="d-flex">
          <span className="font-weight-bold flex-grow-1">
            Usuniecie sali spowoduje również odwołanie wszystkich rezerwacji związanych z salą.
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

export default AdministrationForm;
