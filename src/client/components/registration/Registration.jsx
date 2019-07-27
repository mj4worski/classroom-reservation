import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registration } from './actions';

import LayoutContent from '../shared/LayoutContent';
import Table from '../Table';
import './Registration.scss';

class Registration extends PureComponent {
    static propTypes = {
      onSubmitRequest: PropTypes.func.isRequired,
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

    render() {
      const { email, password } = this.state;
      const emailId = 'formEmialRegistration';
      const passwordId = 'formPasswordRegistration';
      return (
        <LayoutContent>
          <div className="registration">
            <Table title="Tylko zarejestrowani użytkownicy mogą dokonywać rezerwacji sal">
              <form className="registration-form">
                <h1 className="registration-form__header">Rejestracja</h1>
                <h2 className="registration-form__sub-header">Stwórz konto w systemie rezerwacji</h2>
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
                      type="password"
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
            </Table>
          </div>
        </LayoutContent>
      );
    }
}

export default connect(null, { onSubmitRequest: registration })(Registration);
