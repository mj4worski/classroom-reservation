import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Administration.scss';
import { fetchClasses } from '../shared/sagas';

class Administration extends PureComponent {
  static propTypes = {
    componentDidMount: PropTypes.func.isRequired,
    onSubmitRequest: PropTypes.func,
    classes: PropTypes.array,
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
    <label htmlFor="class-field" className="registration-form__label">
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

  renderClasses = () => {
    const { classes } = this.props;
    const mappedClasses = classes.reduce((obj, { name }) => {
      obj.items.push(<a
        className="list-group-item list-group-item-action administration-classes__list-item"
        data-toggle="list"
        href={`#${name.replace(/\s/g, '')}`}
        role="tab"
      >
        {name}
      </a>);
      
      obj.contents.push(<div
        className="tab-pane"
        id={name.replace(/\s/g, '')}
        role="tabpanel"
      >
        {name}
      </div>);

      return obj;
    }, { items: [], contents: [] });

    return (
      <div className="row">
        <div className="col-4">
          <div className="list-group list-group-flush" id="list-tab" role="tablist">
            {mappedClasses.items}
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content">
            {mappedClasses.contents}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="administration">
        <h1>Administration</h1>
        <div>
          {this.renderClassInput()}
        </div>
        <div className="administration-classes">
          <h2 className="administration-classes__header">Lista dostępnych sal:</h2>
          {this.renderClasses()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ classes }) => ({
  classes,
});

export default connect(mapStateToProps, { componentDidMount: fetchClasses })(Administration);
