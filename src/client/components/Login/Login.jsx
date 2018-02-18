import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

import LoginDesktop from './LoginDesktop';

const Login = () => (
  <MediaQuery minWidth={992}>
    {(matches) => {
          if (matches) {
              return <LoginDesktop />;
          }
              return <Link to="/login" className="nav-link">Logowanie Mobilne</Link>;
      }}
  </MediaQuery>
);

export default Login;
