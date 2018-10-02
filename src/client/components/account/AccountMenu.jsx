import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import './AccountMenu.scss';

class AccountMenu extends PureComponent {
  renderLink = (href, content) => (
    <li className="account-menu__item" >
      <Link to={href} className="account-menu__link-item">{content}</Link>
    </li>
  );

  renderItem = content => (
    <li className="account-menu__item" >
      {content}
    </li>
  );

  render() {
    return (
      <ul className="account-menu">
        {this.renderLink('/administration', 'Panel administracyjny')}
        {this.renderLink('/reservation', 'Rezerwacja sali')}
        {this.renderLink('/calendar', 'Moje rezerwacje')}
        {this.renderItem(<Logout />)}
      </ul>
    );
  }
}


export default AccountMenu;
