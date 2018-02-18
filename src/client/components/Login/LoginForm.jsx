import React from 'react';

const LoginForm = () => {
  const emailId = 'formEmial';
  const passwordId = 'formPassword';
  return (
    <form className="p-4">
      <div className="form-group">
        <label htmlFor={emailId} className="login-form__label">
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
        <label htmlFor={passwordId} className="login-form__label">
          Hasło
          <input
            type="password"
            className="form-control"
            id={passwordId}
            placeholder="Password"
          />
        </label>

      </div>
      <div className="form-check mb-4">
        <label className="form-check-label login-form__label" htmlFor="dropdownCheck2">
          <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                    Zapamietaj mnie
        </label>
      </div>
      <button type="submit" className="login-form__button btn btn-danger">Zaloguj</button>
    </form>
  );
};

export default LoginForm;
