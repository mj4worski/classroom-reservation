import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { logIn } from './actions';
import Table from '../Table';
import './Login.scss';

class Login extends PureComponent {
    static propTypes = {
      incorrectDate: PropTypes.bool,
      onSubmitRequest: PropTypes.func.isRequired,
      className: PropTypes.string,
    };

    static defaultProps = {
      incorrectDate: false,
      className: '',
    };

    state = {
      email: '',
      password: '',
      rememberMe: false,
    };

    onEmailChange = ({ target }) => {
      this.setState({ email: target.value });
    };

    onPasswordChange = ({ target }) => {
      this.setState({ password: target.value });
    };

    onRememberMeChange = ({ target }) => {
      this.setState({ rememberMe: target.checked });
    };

    onSubmit = (event) => {
      event.preventDefault();
      const { onSubmitRequest } = this.props;
      const { email, password, rememberMe } = this.state;
      onSubmitRequest({ email, password, rememberMe });
    };

    renderAlert = () => (
      <div className="alert alert-danger" role="alert">
        Niepoprawny adres e-mail lub hasło
      </div>
    );

    render() {
      const { incorrectDate, className } = this.props;
      const { email, password } = this.state;
      const emailId = v4();
      const passwordId = v4();
      const rememberMedId = v4();

      return (
        <Table
          title="Pamiętaj o tym by nie udostępniać danych do konta osobom trzecim"
          hiddeTitle={className}
        >
          <form className={`login ${className}`}>
            {incorrectDate && this.renderAlert()}
            <h1 className="login__header">Logowanie</h1>
            <h2 className="login__sub-header">Zaloguj się do już istniejącego konta</h2>
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
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={rememberMedId}
                  onChange={this.onRememberMeChange}
                />
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
        </Table>
      );
    }
}

const mapStateToProps = ({ account }) =>
  ({ incorrectDate: account.failedLogIn });

export default connect(mapStateToProps, { onSubmitRequest: logIn })(Login);
