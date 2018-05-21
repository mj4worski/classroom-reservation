import PropTypes from 'prop-types';

export const reservationsType = PropTypes.arrayOf(PropTypes.shape({
  when: PropTypes.instanceOf(Date).isRequired,
  startTime: PropTypes.instanceOf(Date).isRequired,
  endTime: PropTypes.instanceOf(Date).isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}));
