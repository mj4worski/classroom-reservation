import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default () => (
  <header className="cr-header text-center text-white">
    <div className="cr-header-content">
      <div className="container">
        <h1 className="cr-header-content__heading mb-0">Rezerwacja sal</h1>
        <h2 className="cr-header-content__subheading mb-0">Akademia Górniczo-Hutnicza</h2>
        <Link to="/calendar" className="btn cr-button mt-5">Moje reserwacje</Link>
      </div>
    </div>
    <div className="cr-circle cr-circle--position-1" />
    <div className="cr-circle cr-circle--position-2" />
    <div className="cr-circle cr-circle--position-3" />
    <div className="cr-circle cr-circle--position-4" />
  </header>
);
