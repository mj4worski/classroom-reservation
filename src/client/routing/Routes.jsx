import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { ReservationPage, AdministrationPage, CalendarPage, LoginPage, MainPage } from '../pages';
import Registration from '../components/Registration';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={MainPage} />
    <Route path="/registration" component={Registration} />
    <Route path="/calendar" component={CalendarPage} />
    <Route path="/login" component={LoginPage} />
    <PrivateRoute path="/reservation" component={ReservationPage} />
    <PrivateRoute path="/administration" component={AdministrationPage} />
  </Fragment>
);

export default Routes;
