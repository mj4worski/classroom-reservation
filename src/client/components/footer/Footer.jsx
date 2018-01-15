import React from 'react';
import aghLogo from '../../../../assets/images/agh_logo.jpg';

import './Footer.scss';

export default () => (
  <footer className="bg-black fixed-bottom footer">
    <div className="container footer__container">
      <img src={aghLogo} alt="" />
      <p className="m-0 text-center text-white small">Copyright &copy; Rezerwacja sal 2017</p>
    </div>
  </footer>
);
