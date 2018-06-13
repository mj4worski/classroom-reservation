import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/Routes';
import Navigation from './components/Navigation';
import Header from './components/header';
import Footer from './components/footer';

export default () => (
  <Router>
    <Fragment>
      <Navigation />
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  </Router>
);
