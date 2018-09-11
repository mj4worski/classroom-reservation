import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Main from '../pages/Main/index';
import YourCalendar from '../pages/YourCalendar/index';
import Registration from '../components/Registration/index';
import Reservation from '../pages/Reservation/index';
import Login from '../pages/Login/index';
import Administration from '../components/administration';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Main} />
    <Route path="/registration" component={Registration} />
    <Route path="/calendar" component={YourCalendar} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/reservation" component={Reservation} />
    <PrivateRoute path="/administration" component={Administration} />
  </Fragment>
);

export default Routes;
