import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classname';
import './Dropdown.scss';

class Dropdown extends PureComponent {
  static propTypes = {
    label: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    transparent: PropTypes.bool,
  };

    static defaultProps = {
      transparent: false,
    };

    render() {
      const { children, label, transparent } = this.props;
      const containerClassNames = cx('dropdown-menu', 'dropdown-container', {
        'dropdown-container--transparent': transparent,
      });
      return (
        <div className="dropdown">
          <span className="nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">{label}</span>
          <div className={containerClassNames}>
            {children}
          </div>
        </div>
      );
    }
}

export default Dropdown;
