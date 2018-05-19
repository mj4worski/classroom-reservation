import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import YourCalendar from './YourCalendar';
import { LoginMobile } from '../components/Login';
import Registration from '../components/Registration';
import { Reservation } from '../components/reservation';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={LoginMobile} />
    <Route path="/registration" component={Registration} />
    <Route path="/calendar" component={YourCalendar} />
    <Route path="/reservation" component={Reservation} />
  </Fragment>
);

export default Routes;
