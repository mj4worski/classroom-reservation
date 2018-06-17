import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { prepareWeeks } from './prepareWeeks';
import WeekDays from './WeekDays';
import { CalendarRow as Row, CalendarCell as Cell } from './layout';
import { eventsType } from './types';

import './Month.scss';

const MonthDay = ({ dayNumber, events }) => (
  <Cell>
    <span className="month-day">
      {dayNumber}
      {events.length > 0 && events.map(event => <div>{event.name}</div>)}
    </span>
  </Cell>
);

MonthDay.propTypes = {
  dayNumber: PropTypes.number.isRequired,
  events: eventsType.isRequired,
};

function getEventsForSpecificDay(events, day) {
  return events.filter(({ when }) => when.getDate() === day);
}

export default class Month extends Component {
  static propTypes = {
    month: PropTypes.instanceOf(moment).isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      when: PropTypes.instanceOf(Date),
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date),
      name: PropTypes.string,
    })).isRequired,
  };

  renderDays = (week, events) => {
    const days = [];
    let dayNumber = week;
    for (let i = 0; i < 7; i += 1) {
      days.push(<MonthDay
        dayNumber={dayNumber.date()}
        key={dayNumber.date()}
        events={getEventsForSpecificDay(events, dayNumber.date())}
      />);
      dayNumber = week.add(1, 'd');
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
          <Row key={weeks}>
            {this.renderDays(week, events)}
          </Row>
          ))
        }
      </div>
    );
  }
}
