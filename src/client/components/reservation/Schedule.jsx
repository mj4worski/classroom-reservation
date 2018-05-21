import React from 'react';
import './Schedule.scss';

const ScheduleItem = ({ itemNumber }) => (
  <div className="schedule-item">
    {itemNumber}
  </div>
);

const Schedule = ({ existingReservations, yourReservations }) => {
  const rows = [];
  for (let i = 0; i < 24; i += 1) {
    rows.push(<ScheduleItem key={i} itemNumber={i} />);
  }
  return (
    <div className="schedule">
      {rows}
    </div>
  );
};

export default Schedule;
