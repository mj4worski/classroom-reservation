import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import YourCalendar from './YourCalendar';
import Registration from '../components/Registration';
import Reservation from './Reservation';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Main} />
    <Route path="/registration" component={Registration} />
    <Route path="/calendar" component={YourCalendar} />
    <Route path="/reservation" component={Reservation} />
  </Fragment>
);

export default Routes;
