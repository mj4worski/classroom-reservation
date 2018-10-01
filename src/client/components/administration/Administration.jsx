import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { classroomType } from './types';
import Tile from './Tile';
import Classroom from './Classroom';
import { fetchClasses, updateClass, addClass, deleteClass } from '../shared/sagas';
import './Administration.scss';

const removeWhiteCharacter = string => string.replace(/\s/g, '');

class Administration extends PureComponent {
  static propTypes = {
    componentDidMount: PropTypes.func.isRequired,
    onAddClassRequest: PropTypes.func.isRequired,
    classes: PropTypes.arrayOf(classroomType),
    classroomNameChangeRequested: PropTypes.func.isRequired,
    classroomDeleteRequested: PropTypes.func.isRequired,
  };

  static defaultProps = {
    classes: [],
  };

  state = {
    classroomName: '',
    activeItemId: '',
    filtredClassesroom: [],
  };

  componentDidMount() {
    this.props.componentDidMount();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.activeItemId === '' && nextProps.classes.length > 0) {
      this.setState({ activeItemId: nextProps.classes[0]._id });
    }
  }

  onClassChange = ({ target }) => {
    this.setState({ classroomName: target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { onAddClassRequest } = this.props;
    const { classroomName } = this.state;
    if (!classroomName) {
      return;
    }
    this.setState({ classroomName: '' });
    onAddClassRequest({ name: classroomName });
  };

  onClassroomClick = id => this.setState({ activeItemId: id })

  isActive = id => this.state.activeItemId === id

  renderClassInput = () => (
    <label htmlFor="class-field">
      <h6>Wprowadź sale</h6>
      <div className="form-inline">
        <input
          value={this.state.classroomName}
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
    const { classes, classroomNameChangeRequested, classroomDeleteRequested } = this.props;
    const mappedClasses = classes.reduce((obj, classroom) => {
      obj.items.push(<Classroom
        classroom={classroom}
        active={this.isActive(classroom._id)}
        onClick={this.onClassroomClick}
        key={classroom.name}
      />);
      obj.itemsPane.push(<Tile
        classroom={classroom}
        active={this.isActive(classroom._id)}
        id={removeWhiteCharacter(classroom.name)}
        onEditSubmit={classroomNameChangeRequested}
        onDeleteRequested={classroomDeleteRequested}
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
    onAddClassRequest: addClass,
    classroomDeleteRequested: deleteClass,
  },
)(Administration);
