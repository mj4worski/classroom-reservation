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
        <header className="calendar-header">
          <div>
            <h1>{this.state.month.format('D dddd')}</h1>
            <h1>{this.state.month.format('MMMM YYYY')}</h1>
          </div>
          <div className="calendar-header__navigation">
            <button onClick={this.previous}>Left</button>
            <button onClick={this.next}>Right</button>
          </div>
        </header>
        <div className="calendar-content">
          <div className="calendar-week">
            <div className="calendar-week__day">Niedziela</div>
            <div className="calendar-week__day">Poniedziałek</div>
            <div className="calendar-week__day">Wtorek</div>
            <div className="calendar-week__day">Środa</div>
            <div className="calendar-week__day">Czwartek</div>
            <div className="calendar-week__day">Piątek</div>
            <div className="calendar-week__day">Sobota</div>
          </div>

          {prepareWeeks(month).map(week => <Week date={week} key={week.date() + week.month()} />)}
        </div>
      </div>
    );
  }
}
