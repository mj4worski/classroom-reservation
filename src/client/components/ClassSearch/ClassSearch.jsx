import React, { PureComponent } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import { getClasses } from '../../services';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

const inputValueSameAsClassName = (inputLength, inputValue) =>
  ({ name: className }) => className.toLowerCase().slice(0, inputLength) === inputValue;

export default class ClassSearch extends PureComponent {
  static propTypes = {
    onChangeRequest: PropTypes.func,
    placeholder: PropTypes.string,
    containerClassTheme: PropTypes.string,
  };

  static defaultProps = {
    onChangeRequest: () => {},
    placeholder: '',
    containerClassTheme: '',
  };

  state = {
    value: '',
    classes: [],
    fetchedClasses: [],
  };

  componentDidMount() {
    getClasses()
      .then(classes => this.setState({ fetchedClasses: classes, classes }));
  }

  onChange = (event, { newValue }) => {
    const { onChangeRequest } = this.props;
    this.setState({ value: newValue }, () => onChangeRequest(this.state.value));
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      classes: this.getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      classes: this.state.fetchedClasses,
    });
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ?
      this.state.fetchedClasses :
      this.state.fetchedClasses.filter(inputValueSameAsClassName(inputLength, inputValue));
  };

  render() {
    const { placeholder, containerClassTheme } = this.props;
    const { value, classes } = this.state;

    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange,
    };


    const inputTheme = { input: 'form-control', container: containerClassTheme };

    return (
      <Autosuggest
        suggestions={classes}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={inputTheme}
      />
    );
  }
}
