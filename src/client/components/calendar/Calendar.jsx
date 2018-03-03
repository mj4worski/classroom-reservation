import React, { Component } from 'react';

import './Calendar.scss';

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <header>
          <h1>2017</h1>
        </header>
        <div className="calendar-content">
          <div className="weekdays">
            <div className="weekdays__day">Sunday</div>
            <div className="weekdays__day">Monday</div>
            <div className="weekdays__day">Tuesday</div>
            <div className="weekdays__day">Wednesday</div>
            <div className="weekdays__day">Thursday</div>
            <div className="weekdays__day">Friday</div>
            <div className="weekdays__day">Saturday</div>
          </div>

          <div className="days-container">
            <div className="days-container__day">
              27
            </div>
            <div className="days-container__day">
              28
            </div>
            <div className="days-container__day">
              29
            </div>
            <div className="days-container__day">
              30
            </div>
            <div className="days-container__day">
              31
            </div>

            <div className="days-container__day">
              1
            </div>
            <div className="days-container__day">
              2
            </div>
          </div>

          <div className="days-container">
            <div className="days-container__day">
              3
            </div>
            <div className="days-container__day">
              4
            </div>
            <div className="days-container__day">
              5
            </div>
            <div className="days-container__day">
              6
            </div>
            <div className="days-container__day">
              7
            </div>
            <div className="days-container__day">
              8
            </div>
            <div className="days-container__day">
              9
            </div>
          </div>

          <div className="days-container">
            <div className="days-container__day">
              10
            </div>
            <div className="days-container__day">
              11
            </div>
            <div className="days-container__day">
              12
            </div>
            <div className="days-container__day">
              13
            </div>
            <div className="days-container__day">
              14
            </div>
            <div className="days-container__day">
              15
            </div>
            <div className="days-container__day">
              16
            </div>
          </div>

          <div className="days-container">
            <div className="days-container__day">
              17
            </div>
            <div className="days-container__day">
              18
            </div>
            <div className="days-container__day">
              19
            </div>
            <div className="days-container__day">
              20
            </div>
            <div className="days-container__day">
              21
            </div>
            <div className="days-container__day">
              22
            </div>
            <div className="days-container__day">
              23
            </div>
          </div>

          <div className="days-container">
            <div className="days-container__day">
              24
            </div>
            <div className="days-container__day">
              25
            </div>
            <div className="days-container__day">
              26
            </div>
            <div className="days-container__day">
              27
            </div>
            <div className="days-container__day">
              28
            </div>
            <div className="days-container__day">
              29
            </div>
            <div className="days-container__day">
              30
            </div>
          </div>

          <div className="days-container">
            <div className="days-container__day">
              31
            </div>
            <div className="days-container__day">
              1
            </div>
            <div className="days-container__day">
              2
            </div>
            <div className="days-container__day">
              3
            </div>
            <div className="days-container__day">
              4
            </div>
            <div className="days-container__day">
              5
            </div>
            <div className="days-container__day">
              6
            </div>
          </div>
        </div>
      </div>
    );
  }
}
