import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { ReservationPage, AdministrationPage, CalendarPage, LoginPage, MainPage, MyReservationPage } from '../pages';
import Registration from '../components/registration';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={MainPage} />
    <Route path="/registration" component={Registration} />
    <PrivateRoute path="/calendar" component={CalendarPage} />
    <Route path="/login" component={LoginPage} />
    <PrivateRoute path="/reservation" component={ReservationPage} />
    <Route path="/administration" component={AdministrationPage} />
    <PrivateRoute path="/myreservation" component={MyReservationPage} />
  </Fragment>
);

export default Routes;
