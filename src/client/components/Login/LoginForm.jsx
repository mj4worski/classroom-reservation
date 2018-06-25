import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn } from './actions';
import './LoginForm.scss';

class LoginForm extends PureComponent {
    static propTypes = {
      incorrectDate: PropTypes.bool,
      onSubmitRequest: PropTypes.func.isRequired,
      successLogin: PropTypes.bool,
    };

    static defaultProps = {
      incorrectDate: false,
      successLogin: false,
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
      const { incorrectDate, successLogin } = this.props;
      const { email, password } = this.state;
      const emailId = 'formEmial';
      const passwordId = 'formPassword';

      //TODO:: Fix Redirect
      if (successLogin) {
        return <Redirect to="/calendar" />;
      }

      return (
        <Fragment>
          {incorrectDate && this.renderAlert()}
          <form className="p-4">
            <div className="form-group">
              <label htmlFor={emailId} className="login-form__label">
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
              <label htmlFor={passwordId} className="login-form__label">
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
              <label className="form-check-label login-form__label" htmlFor="dropdownCheck2">
                <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                          Zapamietaj mnie
              </label>
            </div>
            <button
              type="submit"
              className="login-form__button btn btn-danger"
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

export default connect(mapStateToProps, { onSubmitRequest: logIn })(LoginForm);
