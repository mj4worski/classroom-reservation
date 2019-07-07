import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Month from './Month';
import { eventsType } from './types';
import { fetchReservationsByUserId } from '../actions';
import arrow from './arrow.svg';

import './Calendar.scss';

const filterEventByMonthAndYear = (events, month, year) =>
  events.filter(({ when }) => when.getMonth() === month && when.getFullYear() === year);

class Calendar extends Component {
  static propTypes = {
    events: eventsType,
    featchReservationRequest: PropTypes.func.isRequired,
  };

  static defaultProps = {
    events: [],
  };

  state = {
    month: moment(),
  };

  componentDidMount() {
    this.props.featchReservationRequest();
  }

  previous = () => {
    this.setState({ month: this.state.month.add(-1, 'M') });
  };

  next = () => {
    this.setState({ month: this.state.month.add(1, 'M') });
  };

  renderHeader = () => (
    <header className="calendar-header">
      <div className="calendar-current-date">
        <h1 className="calendar-current-date__content">{this.state.month.locale('pl').format('MMMM YYYY')}</h1>
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
    const { month } = this.state;
    const { events } = this.props;
    const eventsForCurrentMonth = filterEventByMonthAndYear(
      events,
      month.get('month'),
      month.get('year'),
    );
    return (
      <div className="calendar">
        {this.renderHeader()}
        <Month
          month={month}
          events={eventsForCurrentMonth}
          currentMonth={month.get('month')}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.reservations,
});

export default connect(
  mapStateToProps,
  { featchReservationRequest: fetchReservationsByUserId },
)(Calendar);
