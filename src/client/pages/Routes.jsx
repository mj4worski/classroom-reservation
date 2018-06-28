import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Main from './Main';
import YourCalendar from './YourCalendar';
import Registration from '../components/Registration';
import Reservation from './Reservation';
import Login from './Login';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Main} />
    <Route path="/registration" component={Registration} />
    <Route path="/calendar" component={YourCalendar} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/reservation" component={Reservation} />
  </Fragment>
);

export default Routes;
