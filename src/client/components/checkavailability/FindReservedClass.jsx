import React, { PureComponent } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReservations } from '../calendar';
import { getClasses } from '../../services';
import './FindReservedClass.scss';

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

function inputValueSameAsClassName(inputLength, inputValue) {
  return ({ name: className }) => className.toLowerCase().slice(0, inputLength) === inputValue;
}

class FindReservedClass extends PureComponent {
  static propTypes = {
    onFindClickRequest: PropTypes.func.isRequired,
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
    this.setState({
      value: newValue,
    });
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

  onSubmit = () => {
    const { value } = this.state;
    const { onFindClickRequest } = this.props;
    onFindClickRequest(value);
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
    const { value, classes } = this.state;

    const inputProps = {
      placeholder: 'Wpisz sale ktora Cie interesuje',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="find-reserved-class">
        <label htmlFor="example-search-input" className="col-11 col-form-label">
          Wyszukaj sali
          <Autosuggest
            suggestions={classes}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={{ input: 'form-control' }}
          />
        </label>
        <button type="button" className="btn btn-primary col-1" onClick={this.onSubmit}>Szukaj</button>
      </div>
    );
  }
}

export default connect(null, { onFindClickRequest: fetchReservations })(FindReservedClass);