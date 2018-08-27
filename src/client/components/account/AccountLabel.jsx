import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './AccountLabel.scss';

const AccountLabel = ({ userName }) => (
  <span className="account-label">Witaj, {userName}</span>
);

AccountLabel.propTypes = {
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = ({ account: { email } }) => ({
  userName: email.substr(0, email.indexOf('@')),
});

export default connect(mapStateToProps, null)(AccountLabel);
