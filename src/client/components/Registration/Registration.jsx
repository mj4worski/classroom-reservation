import React, { PureComponent } from 'react';

import './Registration.scss';

export default class Registration extends PureComponent {
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

    onSubmit = () => {

    };

    render() {
      const { email, password } = this.state;
      const emailId = 'formEmialRegistration';
      const passwordId = 'formPasswordRegistration';
      return (
        <form className="p-4">
          <div className="form-group">
            <label htmlFor={emailId} className="registration-form__label">
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
            <label htmlFor={passwordId} className="registration-form__label">
                        Hasło
              <input
                type="text"
                className="form-control"
                id={passwordId}
                placeholder="Password"
                value={password}
                onChange={this.onPasswordChange}
              />
            </label>

          </div>
          <button
            type="submit"
            className="registration-form__button btn btn-danger"
            onClick={this.onSubmit}
          >
                    Zarejestruj
          </button>
        </form>
      );
    }
}
