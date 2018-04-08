import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { prepareWeeks } from './prepareWeeks';
import WeekDays from './WeekDays';
import CalendarRow from './CalendarRow';
import { eventsType } from './types';

import './Month.scss';

const MonthDay = ({ dayNumber, events }) => (
  <span className="month-day">
    {dayNumber}
    {events.length > 0 && events.map(event => <div>{event.name}</div>)}
  </span>
);

MonthDay.propTypes = {
  dayNumber: PropTypes.string.isRequired,
  events: eventsType.isRequired,
};

export default class Month extends Component {
  static propTypes = {
    // TODO: Consider how handle moment is type
    month: PropTypes.any.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      when: PropTypes.instanceOf(Date),
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date),
      name: PropTypes.string,
    })).isRequired,
  };

  renderDays = (week, events) => {
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      const dayNumber = week.date();
      days.push(<MonthDay
        dayNumber={dayNumber}
        key={dayNumber}
        events={events.filter(({ when }) => when.getDate() === dayNumber)}
      />);
      week = week.add(1, 'd');
    }
    return days;
  };

  render() {
    const { month, events } = this.props;
    const weeks = prepareWeeks(month);
    return (
      <div className="month">
        <WeekDays />
        {weeks.map(week => (
          <CalendarRow>
            {this.renderDays(week, events)}
          </CalendarRow>
          ))
        }
      </div>
    );
  }
}
