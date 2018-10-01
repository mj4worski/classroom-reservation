import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { classroomType } from './types';

class Classroom extends PureComponent {
    static propTypes = {
      classroom: classroomType.isRequired,
      active: PropTypes.bool.isRequired,
      onClick: PropTypes.func.isRequired,
    };

    handleOnClick = () => {
      const { onClick, classroom } = this.props;
      onClick(classroom._id);
    }

    render() {
      const {
        classroom, active,
      } = this.props;

      return (
        <a
          className={`list-group-item list-group-item-action administration-class-list__item ${active ? 'show active' : ''}`}
          data-toggle="list"
          href={`#${classroom._id}`}
          role="tab"
          onClick={this.handleOnClick}
        >
          {classroom.name}
        </a>
      );
    }
}

export default Classroom;
