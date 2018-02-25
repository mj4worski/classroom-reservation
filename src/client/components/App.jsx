import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Navigation from './Navigation';
import Header from './header';
import Footer from './footer';

import './App.scss';

export default () => (
  <Router>
    <div>
      <Navigation />
      <Header />
      <Routes />
      <Footer />
    </div>
  </Router>
);
