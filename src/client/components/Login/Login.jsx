import React from 'react';
import MediaQuery from 'react-responsive';

export default () => (
  <MediaQuery minWidth={992}>
    {(matches) => {
          if (matches) {
              return <a className="nav-link" href="#">Logowanie Desktop</a>;
          }
              return <a className="nav-link" href="#">Logowanie Mobile</a>;
      }}

  </MediaQuery>
);
