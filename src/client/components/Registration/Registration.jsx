import React from 'react';

import './Registration.scss';

const Registration = () => {
  const emailId = 'formEmialRegistration';
  const passwordId = 'formPasswordRegistration';
  return (
    <form className="p-4">
      <div className="form-group">
        <label htmlFor={emailId} className="registration-form__label">
                    Adres Email
          <input
            type="email"
            className="form-control"
            id={emailId}
            placeholder="email@example.com"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor={passwordId} className="registration-form__label">
                    Hasło
          <input
            type="text"
            className="form-control"
            id={passwordId}
            placeholder="Password"
          />
        </label>

      </div>
      <button type="submit" className="registration-form__button btn btn-danger">
          Zarejestruj
      </button>
    </form>
  );
};

export default Registration;
