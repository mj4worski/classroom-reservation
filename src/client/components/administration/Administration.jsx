import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tile from './Tile';
import { fetchClasses, updateClass } from '../shared/sagas';
import './Administration.scss';

const removeWhiteCharacter = string => string.replace(/\s/g, '');

class Administration extends PureComponent {
  static propTypes = {
    componentDidMount: PropTypes.func.isRequired,
    onSubmitRequest: PropTypes.func,
    classes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
    classroomNameChangeRequested: PropTypes.func.isRequired,
  };

  static defaultProps = {
    classes: [],
    onSubmitRequest: () => {},
  };

  state = {
    className: '',
  };

  componentDidMount() {
    this.props.componentDidMount();
  }

  onClassChange = ({ target }) => {
    this.setState({ className: target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { onSubmitRequest } = this.props;
    const { className } = this.state;
    onSubmitRequest({ className });
  };

  renderClassInput = () => (
    <label htmlFor="class-field">
      <h6>Wprowadź sale</h6>
      <div className="form-inline">
        <input
          type="text"
          className="form-control"
          id="class-field"
          placeholder="Wprowadz sale"
          onChange={this.onClassChange}
        />
        <button
          type="submit"
          className="btn btn-danger"
          onClick={this.onSubmit}
        >
          Dodaj sale
        </button>
      </div>
    </label>
  );

  renderClassesWithRelatedTiles = () => {
    const { classes, classroomNameChangeRequested } = this.props;
    const mappedClasses = classes.reduce((obj, classroom, idx) => {
      obj.items.push(this.renderItem(classroom.name, idx === 0));
      obj.itemsPane.push(<Tile
        classroom={classroom}
        active={idx === 0}
        id={removeWhiteCharacter(classroom.name)}
        onEditSubmit={classroomNameChangeRequested}
        key={classroom.name}
      />);
      return obj;
    }, { items: [], itemsPane: [] });

    return (
      <div className="row administration-class__content">
        <div className="col-4 list-group list-group-flush administration-class-list" id="list-tab" role="tablist">
          {mappedClasses.items}
        </div>
        <div className="col-8 tab-content administration__tile">
          {mappedClasses.itemsPane}
        </div>
      </div>
    );
  };

  renderItem = (name, active) => (
    <a
      className={`list-group-item list-group-item-action administration-class-list__item ${active ? 'show active' : ''}`}
      data-toggle="list"
      href={`#${removeWhiteCharacter(name)}`}
      role="tab"
      key={name}
    >
      {name}
    </a>
  )

  render() {
    return (
      <div className="administration">
        <h1>Administration</h1>
        <div className="my-4">
          {this.renderClassInput()}
        </div>
        <div className="administration-class">
          <h2 className="administration-class__header">Lista dostępnych sal:</h2>
          {this.renderClassesWithRelatedTiles()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ classes }) => ({
  classes,
});

export default connect(
  mapStateToProps,
  {
    componentDidMount: fetchClasses,
    classroomNameChangeRequested: updateClass,
  },
)(Administration);
