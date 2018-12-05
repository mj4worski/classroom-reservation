/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from './actions';
import './Logout.scss';

class Logout extends PureComponent {
  static propTypes = {
    onLogoutRequest: PropTypes.func.isRequired,
  };

  render() {
    const { onLogoutRequest } = this.props;
    return (
      <div className="logout" onClick={onLogoutRequest}>
         Wyloguj
      </div>
    );
  }
}

export default connect(null, { onLogoutRequest: logOut })(Logout);
