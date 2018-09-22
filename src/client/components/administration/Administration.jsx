import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Administration.scss';
import { fetchClasses } from '../shared/sagas';

const removeWhiteCharacter = string => string.replace(/\s/g, '');

class Administration extends PureComponent {
  static propTypes = {
    componentDidMount: PropTypes.func.isRequired,
    onSubmitRequest: PropTypes.func,
    classes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
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

  renderClassesWithRelatedPanes = () => {
    const { classes } = this.props;

    const mappedClasses = classes.reduce((obj, { name }, idx) => {
      obj.items.push(this.renderItem(name, idx === 0));
      obj.itemsPane.push(this.renderItemPane(name, idx === 0));
      return obj;
    }, { items: [], itemsPane: [] });

    return (
      <div className="row administration-class__content">
        <div className="col-4 list-group list-group-flush administration-class-list" id="list-tab" role="tablist">
          {mappedClasses.items}
        </div>
        <div className="col-8 tab-content administration-pane">
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
    >
      {name}
    </a>
  )

  renderItemPane = (name, active) => (
    <div
      className={`tab-pane administration-pane__item ${active ? 'show active' : ''}`}
      id={removeWhiteCharacter(name)}
      role="tabpanel"
    >
      <h4>{name}</h4>
      <label
        htmlFor="class-field-edit"
        className="administration-pane__input"
      >
        <h6>Edytuj sale</h6>
        <div className="form-inline">
          <input
            type="text"
            className="form-control flex-grow-1"
            id="class-field-edit"
            placeholder="Edytuj sale"
          />
          <button
            type="submit"
            className="btn btn-danger m-lg-1"
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
          {this.renderClassesWithRelatedPanes()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ classes }) => ({
  classes,
});

export default connect(mapStateToProps, { componentDidMount: fetchClasses })(Administration);
