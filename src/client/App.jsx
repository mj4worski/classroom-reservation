import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import { history } from './config';
import Routes from './pages/Routes';
import Navigation from './components/Navigation';
import Header from './components/header';
import Footer from './components/footer';

export default () => (
  <Router history={history}>
    <Fragment>
      <Navigation />
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  </Router>
);
