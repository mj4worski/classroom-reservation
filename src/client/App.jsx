import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './config';
import Routes from './pages/Routes';
import Navigation from './components/Navigation';
import Header from './components/header';
import Footer from './components/footer';
import { rememberMe } from './components/Login';

class App extends PureComponent {
  static propTypes = {
    onComponentDidMount: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    return (
      <Router history={history}>
        <Fragment>
          <Navigation />
          <Header />
          <Routes />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default connect(null, { onComponentDidMount: rememberMe })(App);
