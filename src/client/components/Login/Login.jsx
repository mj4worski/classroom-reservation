import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import { logIn } from './actions';
import './Login.scss';

class Login extends PureComponent {
    static propTypes = {
      incorrectDate: PropTypes.bool,
      onSubmitRequest: PropTypes.func.isRequired,
      successLogin: PropTypes.bool,
      className: PropTypes.string,
      location: PropTypes.shape({
        state: PropTypes.shape({
          from: PropTypes.object,
        }),
      }).isRequired,
    };

    static defaultProps = {
      incorrectDate: false,
      successLogin: false,
      className: '',
    };

    state = {
      email: '',
      password: '',
    };

    onEmailChange = ({ target }) => {
      this.setState({ email: target.value });
    };

    onPasswordChange = ({ target }) => {
      this.setState({ password: target.value });
    };

    onSubmit = (event) => {
      event.preventDefault();
      const { onSubmitRequest } = this.props;
      const { email, password } = this.state;
      onSubmitRequest({ email, password });
    };

    renderAlert = () => (
      <div className="alert alert-danger" role="alert">
        Niepoprawny adres e-mail lub hasło
      </div>
    );

    render() {
      const { incorrectDate, successLogin, className } = this.props;
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      const { email, password } = this.state;
      const emailId = v4();
      const passwordId = v4();
      const rememberMedId = v4();

      if (successLogin) {
        return <Redirect to={from} />;
      }

      return (
        <Fragment>
          {incorrectDate && this.renderAlert()}
          <form className={`login ${className}`}>
            <div className="form-group">
              <label htmlFor={emailId} className="login__label">
                          Adres Email
                <input
                  type="email"
                  className="form-control"
                  id={emailId}
                  placeholder="email@example.com"
                  value={email}
                  onChange={this.onEmailChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor={passwordId} className="login__label">
                          Hasło
                <input
                  type="password"
                  className="form-control"
                  id={passwordId}
                  value={password}
                  onChange={this.onPasswordChange}
                />
              </label>
            </div>
            <div className="form-check mb-4">
              <label className="login_label form-check-label" htmlFor={rememberMedId}>
                <input type="checkbox" className="form-check-input" id={rememberMedId} />
                          Zapamietaj mnie
              </label>
            </div>
            <button
              type="submit"
              className="login__button btn btn-danger"
              onClick={this.onSubmit}
            >
                      Zaloguj
            </button>
          </form>
        </Fragment>
      );
    }
}

const mapStateToProps = ({ account }) =>
  ({ incorrectDate: account.failedLogIn, successLogin: account.loggedIn });

export default withRouter(connect(mapStateToProps, { onSubmitRequest: logIn })(Login));
