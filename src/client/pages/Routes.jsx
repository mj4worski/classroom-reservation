import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import Reservation from '../pages/Reservation';
import { LoginMobile } from '../components/Login';
import Registration from '../components/Registration';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={LoginMobile} />
    <Route path="/registration" component={Registration} />
    <Route path="/reservation" component={Reservation} />
  </Fragment>
);

export default Routes;
