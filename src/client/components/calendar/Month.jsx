import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { prepareWeeks } from './prepareWeeks';
import WeekDays from './WeekDays';

import './Month.scss';

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

export default class Month extends Component {
  static propTypes = {
    month: PropTypes.any.isRequired,
  };

  render() {
    const { month } = this.props;
    return (
      <div className="month">
        <WeekDays />
        {prepareWeeks(month).map(week => <Week date={week} key={week.date() + week.month()} />)}
      </div>
    );
  }
}
