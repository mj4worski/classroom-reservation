import React, { Component } from 'react';
import moment from 'moment';
import { prepareWeeks } from './prepareWeeks';

import './Calendar.scss';

const Week = ({ date }) => {
  const days = [];
  let currentDate = date;
  for (let i = 0; i < 7; i += 1) {
    const dayNumber = currentDate.date();
    days.push(<span className="week__day" key={dayNumber}>{dayNumber}</span>);
    currentDate = date.add(1, 'd');
  }

  return (
    <div className="week">
      {days}
    </div>
  );
};

export default class Calendar extends Component {
  state = {
    month: moment(),
  };

  previous = () => {
    this.setState({ month: this.state.month.add(-1, 'M') });
  };

  next = () => {
    this.setState({ month: this.state.month.add(1, 'M') });
  };

  render() {
    const { month } = this.state;
    return (
      <div className="calendar">
        <header>
          <button onClick={this.previous}>Left</button>
          <h1>{this.state.month.format('dddd, MMMM Do YYYY')}</h1>
          <button onClick={this.next}>Rightss</button>
        </header>
        <div className="calendar-content">
          <div className="weekdays">
            <div className="weekdays__day">Niedziela</div>
            <div className="weekdays__day">Poniedziałek</div>
            <div className="weekdays__day">Wtorek</div>
            <div className="weekdays__day">Środa</div>
            <div className="weekdays__day">Czwartek</div>
            <div className="weekdays__day">Piątek</div>
            <div className="weekdays__day">Sobota</div>
          </div>

          {prepareWeeks(month).map(week => <Week date={week} key={week.date() + week.month()} />)}
        </div>
      </div>
    );
  }
}
