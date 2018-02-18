/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';

import './Navigatio.scss';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-dark cr-navbar fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">Rezerwacja sal</a>
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
            <Login />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
