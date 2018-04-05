import React, { Component } from 'react';
import moment from 'moment';
import Month from './Month';
import Week from './Week';

import './Calendar.scss';

const CalendarType = {
  MONTH: 'month',
  WEEK: 'week',
};

export default class Calendar extends Component {
  state = {
    month: moment(),
    calendarType: CalendarType.MONTH,
  };

  previous = () => {
    this.setState({ month: this.state.month.add(-1, 'M') });
  };

  next = () => {
    this.setState({ month: this.state.month.add(1, 'M') });
  };

  render() {
    const { month, calendarType } = this.state;
    const CalendarContent = calendarType === CalendarType.MONTH ? Month : Week;
    return (
      <div className="calendar">
        <header className="calendar-header">
          <div>
            <h1>{this.state.month.format('D dddd')}</h1>
            <h1>{this.state.month.format('MMMM YYYY')}</h1>
          </div>
          <div>
            <button onClick={() => { this.setState({ calendarType: CalendarType.MONTH }); }}>Miesiac</button>
            <button onClick={() => { this.setState({ calendarType: CalendarType.WEEK }); }}>Tydzien</button>
          </div>
          <div className="calendar-header__navigation">
            <button onClick={this.previous}>Left</button>
            <button onClick={this.next}>Right</button>
          </div>
        </header>
        <CalendarContent month={month} />
      </div>
    );
  }
}
