import React, { Component } from 'react';
import moment from 'moment';
import Month from './Month';
import Week from './Week';
import { eventsType } from './types';

import './Calendar.scss';

const CalendarType = {
  MONTH: 'month',
  WEEK: 'week',
};

const filterEventForSpecificMonth = (events, month) =>
  events.filter(({ when }) => when.getMonth() === month);

export default class Calendar extends Component {
  static propTypes = {
    events: eventsType,
  };

  static defaultProps = {
    events: [],
  };

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

  monthView = () => {
    this.setState({ calendarType: CalendarType.MONTH });
  };

  weekView = () => {
    this.setState({ calendarType: CalendarType.WEEK });
  };

  render() {
    const { month, calendarType } = this.state;
    const { events } = this.props;
    const eventsForCurrentMonth = filterEventForSpecificMonth(events, month.get('month'));
    const CalendarContent = calendarType === CalendarType.MONTH ? Month : Week;
    return (
      <div className="calendar">
        <header className="calendar-header">
          <div>
            <h1>{this.state.month.format('D dddd')}</h1>
            <h1>{this.state.month.format('MMMM YYYY')}</h1>
          </div>
          <div>
            <button onClick={this.monthView}>Miesiac</button>
            <button onClick={this.weekView}>Tydzien</button>
          </div>
          <div className="calendar-header__navigation">
            <button onClick={this.previous}>Left</button>
            <button onClick={this.next}>Right</button>
          </div>
        </header>
        <CalendarContent
          month={month}
          events={eventsForCurrentMonth}
        />
      </div>
    );
  }
}
