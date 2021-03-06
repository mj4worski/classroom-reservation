import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import { withErrorHandler } from '../shared/hoc';
import { fetchClasses } from '../shared/sagas/';
import './ClassSearch.scss';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className="suggestion">
    {suggestion.name}
  </div>
);

const inputValueSameAsClassName = (inputLength, inputValue) =>
  ({ name: className }) => className.toLowerCase().slice(0, inputLength) === inputValue;

class ClassSearch extends PureComponent {
  static propTypes = {
    onChangeRequest: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    componentDidMount: PropTypes.func.isRequired,
    classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static defaultProps = {
    onChangeRequest: () => {},
    placeholder: '',
    label: '',
    errorMessage: '',
    classes: [],
  };

  state = {
    value: '',
    classSuggestions: this.props.classes,
  };

  componentDidMount() {
    this.props.componentDidMount();
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  onSuggestionSelected = (event, { suggestionValue }) => {
    const { onChangeRequest } = this.props;
    onChangeRequest(suggestionValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      classSuggestions: this.getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      classSuggestions: this.props.classes,
    });
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ?
      this.props.classes :
      this.props.classes.filter(inputValueSameAsClassName(inputLength, inputValue));
  };

  createOuterRender = (label, errorMessage) => {
    if (label !== '' || errorMessage !== '') {
      return inputProps => (
        <label className="d-block" htmlFor="classSearch">
          <h6>{label}</h6>
          <input {...inputProps} />
          <div className="invalid-feedback">
            {errorMessage}
          </div>
        </label>
      );
    }
    return undefined;
  };


  render() {
    const {
      placeholder, label, errorMessage,
    } = this.props;
    const { value, classSuggestions } = this.state;
    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange,
      required: Boolean(errorMessage),
      id: 'classSearch',
    };

    const inputTheme = { input: 'form-control', suggestionsContainer: 'class-search__container' };

    return (
      <div className="class-search">
        <Autosuggest
          suggestions={classSuggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          shouldRenderSuggestions={() => true}
          renderSuggestion={renderSuggestion}
          renderInputComponent={this.createOuterRender(label, errorMessage)}
          inputProps={inputProps}
          theme={inputTheme}
          onSuggestionSelected={this.onSuggestionSelected}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classes: state.classes,
  error: state.errors.classes,
});

export default connect(
  mapStateToProps,
  { componentDidMount: fetchClasses },
)(withErrorHandler(ClassSearch));
