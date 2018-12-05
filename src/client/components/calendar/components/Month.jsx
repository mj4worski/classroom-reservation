import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { prepareWeeks } from './prepareWeeks';
import MonthDay from './MonthDay';
import WeekDays from './WeekDays';
import { CalendarRow as Row } from './layout';

import './Month.scss';

function getEventsForSpecificDate(events, date) {
  return events.filter(({ when: eventDate }) => eventDate.getDate() === date.date() && eventDate.getMonth() === date.month());
}

export default class Month extends Component {
  static propTypes = {
    month: PropTypes.instanceOf(moment).isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      when: PropTypes.instanceOf(Date),
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date),
      name: PropTypes.string,
      _id: PropTypes.string,
    })).isRequired,
    currentMonth: PropTypes.number.isRequired,
  };

  renderDays = (week, events) => {
    const days = [];
    let dayInGivenWeek = week;
    for (let i = 0; i < 7; i += 1) {
      days.push(<MonthDay
        dayNumber={dayInGivenWeek.date()}
        key={dayInGivenWeek.date()}
        events={getEventsForSpecificDate(events, dayInGivenWeek)}
        inactive={this.props.currentMonth !== dayInGivenWeek.month()}
      />);
      dayInGivenWeek = week.add(1, 'd');
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
