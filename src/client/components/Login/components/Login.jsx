import React from 'react';
import LoginForm from './LoginForm';
import './Login.scss';

const Login = () => (
  <div className="dropdown">
    <span className="nav-link dropdown-toggle" data-toggle="dropdown">Logowanie</span>
    <div className="dropdown-menu dropdown-container">
      <LoginForm />
    </div>
  </div>
);

export default Login;
