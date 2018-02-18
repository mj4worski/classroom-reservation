import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import { LoginMobile } from './Login';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={MainPage} />
    <Route path="/login" component={LoginMobile} />
  </Fragment>
);

export default Routes;
