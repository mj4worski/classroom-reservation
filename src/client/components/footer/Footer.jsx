import React from 'react';
import aghLogo from '../../../../assets/images/agh_logo.jpg';

import './Footer.scss';

export default () => (
  <footer className="cr-footer">
    <div className="cr-footer__container">
      <img className="cr-footer__agh-logo" src={aghLogo} alt="" />
      <p className="m-0 text-center text-white small">Copyright &copy; Rezerwacja sal 2017</p>
    </div>
  </footer>
);
