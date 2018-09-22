import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

class Tile extends PureComponent {
  static propTypes = {
    classroom: PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onEditSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    active: false,
  }

  state = {
    classroomName: this.props.classroom.name,
  }

  handleEditSubmit = () => {
    const { onEditSubmit, classroom } = this.props;
    onEditSubmit({ name: this.state.classroomName, _id: classroom._id });
  }

  handleClassNameChange = (event) => {
    this.setState({ classroomName: event.target.value });
  }

  render() {
    const { classroom, active, id } = this.props;
    const { classroomName } = this.state;

    return (
      <div
        className={`tab-pane tile ${active ? 'show active' : ''}`}
        id={id}
        role="tabpanel"
      >
        <h4>{classroom.name}</h4>
        <label
          htmlFor="class-field-edit"
          className="tile__input"
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
          >
            Usuń sale
          </button>
        </div>
      </div>
    );
  }
}

export default Tile;
