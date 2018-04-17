import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/Routes';
import Navigation from './components/Navigation';
import Header from './components/header';
import Footer from './components/footer';

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
