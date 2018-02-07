import React from 'react';

export default ({ children }) => (
  <div className="dropdown show">
    <span className="nav-link dropdown-toggle" data-toggle="dropdown">Logowanie Desktop</span>
    {children}
  </div>
);

