import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

class Dropdown extends PureComponent {
  static propTypes = {
    label: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, label } = this.props;
    return (
      <div className="dropdown">
        <span className="nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">{label}</span>
        <div className="dropdown-menu dropdown-container">
          {children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
