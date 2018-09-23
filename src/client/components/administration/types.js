import PropTypes from 'prop-types';

export const classroomType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
});
