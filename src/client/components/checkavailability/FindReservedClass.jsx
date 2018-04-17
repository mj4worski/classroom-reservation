import React, { PureComponent } from 'react';
import Autosuggest from 'react-autosuggest';
import './FindReservedClass.scss';

const classesMockData = [
  {
    name: 'B4 - 101',
  },
  {
    name: 'B4 - 106',
  },
  {
    name: 'B5 - 201',
  },
  {
    name: 'B5 - 301',
  },
];

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

class FindReservedClass extends PureComponent {
  state = {
    value: '',
    suggestions: [],
    suggestionsFromServer: [],
  };

  componentDidMount() {
  // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ suggestionsFromServer: classesMockData });
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
      suggestions: this.getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.suggestionsFromServer.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Wpisz sale ktora Cie interesuje',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="find-reserved-class">
        <label htmlFor="example-search-input" className="col-2 col-form-label">
          Wyszukaj sali
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={{ input: 'form-control' }}
          />
        </label>
        <button type="button" className="btn btn-primary">Szukaj</button>
      </div>
    );
  }
}

export default FindReservedClass;
