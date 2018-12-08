import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { classroomType } from './types';
import AdministrationForm from './AdministrationForm';
import Tiles from '../Tiles';
import { fetchClasses, updateClass, addClass, deleteClass } from '../shared/sagas';
import './Administration.scss';

const bySearchResult = searchResult => item => item.name
  .toLowerCase()
  .indexOf(searchResult.toLowerCase()) !== -1;
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
    searchResult: '',
    filtredClassesroom: this.props.classes,
  };

  componentDidMount() {
    this.props.componentDidMount();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.activeItemId === '' && nextProps.classes.length > 0) {
      this.setState({ activeItemId: nextProps.classes[0]._id });
    }
    this.setState({ filtredClassesroom: nextProps.classes }, this.filterClasses);
  }

  onClassChange = ({ target }) => {
    this.setState({ classroomName: target.value });
  };

  onClassSearchChange = ({ target }) => {
    this.setState({ searchResult: target.value }, this.filterClasses);
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

  filterClasses() {
    const { classes } = this.props;
    const { searchResult } = this.state;

    const filtredClassesroom = classes.filter(bySearchResult(searchResult));
    this.setState({ filtredClassesroom });
  }

  renderClassInput = () => (
    <label htmlFor="class-field" className="mb-3">
      <h6>Wprowadź sale</h6>
      <div className="form-inline">
        <input
          value={this.state.classroomName}
          type="text"
          className="form-control w-50"
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

  renderClassSearchInput = () => (
    <label htmlFor="class-search-field" className="mb-3">
      <h6>Wyszukaj sale</h6>
      <div className="form-inline">
        <input
          value={this.state.searchResult}
          type="text"
          className="form-control w-50"
          id="class-search-field"
          placeholder="Wprowadź szukaną sale."
          onChange={this.onClassSearchChange}
        />
      </div>
    </label>
  );

  renderClassesWithRelatedTiles = () => {
    const { filtredClassesroom } = this.state;
    const { classroomNameChangeRequested, classroomDeleteRequested } = this.props;
    return (
      <Tiles items={filtredClassesroom}>
        {
        date => (
          <AdministrationForm
            {...date}
            onEditSubmit={classroomNameChangeRequested}
            onDeleteRequested={classroomDeleteRequested}
          />)
        }
      </Tiles>
    );
  };

  render() {
    return (
      <div className="administration">
        <h1>Administration</h1>
        <div className="administration__form">
          {this.renderClassInput()}
          {this.renderClassSearchInput()}
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
