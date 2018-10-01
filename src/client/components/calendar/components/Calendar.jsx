import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Month from './Month';
import Week from './Week';
import { eventsType } from './types';
import arrow from './arrow.svg';

import './Calendar.scss';

const CalendarType = {
  MONTH: 'month',
  WEEK: 'week',
};

const filterEventForSpecificMonth = (events, month) =>
  events.filter(({ when }) => when.getMonth() === month);

class Calendar extends Component {
  static propTypes = {
    events: eventsType,
    children: PropTypes.node,
  };

  static defaultProps = {
    events: [],
    children: null,
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


  renderHeaderBottom = children => (children ? <div>{children}</div> : null);

  renderHeader = () => (
    <header className="calendar-header">
      <div className="calendar-current-date">
        <h1 className="calendar-current-date__content">{this.state.month.format('D dddd')}</h1>
        <h1 className="calendar-current-date__content">{this.state.month.format('MMMM YYYY')}</h1>
      </div>
      <div>
        <button className="btn btn-outline-light" onClick={this.monthView}>
                Miesiac
        </button>
        <button className="btn btn-outline-light" onClick={this.weekView}>
                Tydzien
        </button>
      </div>
      <div className="calendar-header-navigation">
        <button className="calendar-header-navigation__button" onClick={this.previous}>
          <img
            className="calendar-header-navigation__arrow calendar-header-navigation__arrow--rotate"
            src={arrow}
            alt="left-arrow"
          />
        </button>
        <button className="calendar-header-navigation__button" onClick={this.next}>
          <img className="calendar-header-navigation__arrow" src={arrow} alt="right-arrow" />
        </button>
      </div>
    </header>
  );

  render() {
    const { month, calendarType } = this.state;
    const { events, children } = this.props;
    const eventsForCurrentMonth = filterEventForSpecificMonth(events, month.get('month'));
    const CalendarContent = calendarType === CalendarType.MONTH ? Month : Week;
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderHeaderBottom(children)}
        <CalendarContent
          month={month}
          events={eventsForCurrentMonth}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.reservations,
});

export default connect(mapStateToProps, null)(Calendar);
