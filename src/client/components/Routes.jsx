import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import { LoginMobile } from './Login';
import Registration from './Registration';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={MainPage} />
    <Route path="/login" component={LoginMobile} />
    <Route path="/registration" component={Registration} />
  </Fragment>
);

export default Routes;
