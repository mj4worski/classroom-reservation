import React from 'react';
import Logout from '../Logout';
import './AccountMenu.scss';

const AccountMenu = () => (
  <ul className="account-menu">
    <li className="account-menu__item" ><Logout /></li>
  </ul>
);


export default AccountMenu;
