import React from 'react';
import LoginForm from './LoginForm';
import './Dropdown.scss';

const Dropdown = () => (
  <div className="dropdown">
    <span className="nav-link dropdown-toggle" data-toggle="dropdown">Logowanie</span>
    <div className="dropdown-menu dropdown-container">
      <LoginForm />
    </div>
  </div>
);

export default Dropdown;
