/* eslint-disable react/no-unused-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import calendarSvg from '../reservation/calendar.svg';

import './Table.scss';

export default class Table extends PureComponent {
    static propTypes = {
      title: PropTypes.node.isRequired,
      hiddeTitle: PropTypes.bool,
      children: PropTypes.node.isRequired,
    };

    static defaultProps = {
      hiddeTitle: false,
    };

    renderTitle = ({ title, hiddeTitle }) => (hiddeTitle ? null : (
      <div className="table-title">
        <span className="table-title__content">
          {title}
        </span>
        <img src={calendarSvg} alt="calendar-icon" className="table-title__image" />
      </div>
    ))

    render() {
      const { children } = this.props;
      return (
        <div className="table">
          {this.renderTitle(this.props)}
          {children}
        </div>
      );
    }
}
