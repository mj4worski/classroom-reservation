import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withAuthentication } from '../hoc';
import Login from '../Login';

import './Navigatio.scss';

class Navigation extends PureComponent {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
    };

    render() {
      const { isAuthenticated } = this.props;

      return (
        <nav className="navbar navbar-expand-lg navbar-dark cr-navbar fixed-top">
          <div className="container">
            <span className="navbar-brand">Rezerwacja sal</span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/registration" className="nav-link">Rejestracja</Link>
                </li>
                <li className="nav-item">
                  {
                                    (isAuthenticated ? (
                                      <button>Wyloguj</button>
                                    ) : (
                                      <Login />
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
