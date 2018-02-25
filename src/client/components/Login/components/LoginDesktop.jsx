import React from 'react';
import LoginFrom from './LoginForm';

import './LoginDesktop.scss';

const LoginDesktop = () => (
  <div className="dropdown">
    <span className="nav-link dropdown-toggle" data-toggle="dropdown">Logowanie Desktop</span>
    <div className="dropdown-menu dropdown-container">
      <LoginFrom />
    </div>
  </div>
);

export default LoginDesktop;

