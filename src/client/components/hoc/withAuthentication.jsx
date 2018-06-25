import { connect } from 'react-redux';

const mapStateToProps = ({ account }) => ({
  isAuthenticated: account.loggedIn,
});

const withAuthentication = WrappedComponent => connect(mapStateToProps, null)(WrappedComponent);

export default withAuthentication;
