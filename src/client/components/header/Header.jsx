/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Header.scss';

export default () => (
  <header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container">
        <h1 className="masthead-heading mb-0">Rezerwacja sal</h1>
        <h2 className="masthead-subheading mb-0">Akademia Górniczo-Hutnicza</h2>
        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Sprawdź dostępność</a>
      </div>
    </div>
    <div className="bg-circle-1 bg-circle" />
    <div className="bg-circle-2 bg-circle" />
    <div className="bg-circle-3 bg-circle" />
    <div className="bg-circle-4 bg-circle" />
  </header>
);
