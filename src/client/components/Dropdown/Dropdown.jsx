import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

// TODO:: Decouple Dropdown from navigation context
class Dropdown extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, label } = this.props;
    return (
      <div className="dropdown">
        <span className="nav-link dropdown-toggle" data-toggle="dropdown">{label}</span>
        <div className="dropdown-menu dropdown-container">
          {children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
