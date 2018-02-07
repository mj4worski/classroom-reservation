import React from 'react';
import MediaQuery from 'react-responsive';

import LoginDesktop from './LoginDesktop.jsx';

const form = (
  <form className="dropdown-menu p-4">
    <div className="form-group">
      <label htmlFor="exampleDropdownFormEmail2">Adress Email</label>
      <input
        type="email"
        className="form-control"
        id="exampleDropdownFormEmail2"
        placeholder="email@example.com"
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleDropdownFormPassword2">Hasło</label>
      <input
        type="password"
        className="form-control"
        id="exampleDropdownFormPassword2"
        placeholder="Password"
      />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
      <label className="form-check-label" htmlFor="dropdownCheck2">
                Zapamietaj mnie
      </label>
    </div>
    <button type="submit" className="btn btn-primary">Zaloguj</button>
  </form>
);

export default () => (
  <MediaQuery minWidth={992}>
    {(matches) => {
          if (matches) {
              return <LoginDesktop>{form}</LoginDesktop>;
          }
              return <a className="nav-link" href="#">Logowanie Mobile</a>;
      }}
  </MediaQuery>
);
