import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withAuthentication } from '../shared/hoc';
import Dropdown from './Dropdown';
import Login from '../Login';
import { AccountLabel, AccountMenu } from '../account';
import './Navigatio.scss';

class Navigation extends PureComponent {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
    };

    render() {
      const { isAuthenticated } = this.props;

      return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar fixed-top">
          <div className="container">
            <span className="navbar-brand">Rezerwacja sal</span>
            <div className="navbar-expand" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item d-flex align-items-center">
                  <Link to="/registration" className="nav-link">Rejestracja</Link>
                </li>
                <li className="nav-item">
                  {
                      (isAuthenticated ? (
                        <Dropdown label={<AccountLabel />}>
                          <AccountMenu />
                        </Dropdown>
                      ) : (
                        <Dropdown label="Logowanie" transparent>
                          <Login className="navigation-login" />
                        </Dropdown>
                      ))
                  }
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
}


export default withAuthentication(Navigation);
