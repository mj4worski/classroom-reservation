import PropTypes from 'prop-types';

export const eventsType = PropTypes.arrayOf(PropTypes.shape({
  when: PropTypes.instanceOf(Date),
  startTime: PropTypes.instanceOf(Date),
  endTime: PropTypes.instanceOf(Date),
  name: PropTypes.string,
  classroomName: PropTypes.string,
  _id: PropTypes.string,
}));
