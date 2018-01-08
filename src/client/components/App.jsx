import React, { Fragment } from 'react';
import Navigation from './navigation';
import Header from './header';
import Footer from './footer';

import './App.scss';
import '../main.scss';

const BasicSection = () => (
  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            {/* @fixme: webpack server (static files loading) */}
            <img className="img-fluid rounded-circle" src="../../../assets/images/agh.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Lorem ipsum dolor sit amet...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quod aliquid, mollitia odio veniam sit iste esse assumenda
                amet aperiam exercitationem, ea animi blanditiis recusandae!
                Ratione voluptatum molestiae adipisci, beatae obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default () => (
  <Fragment>
    <Navigation />
    <Header />
    <BasicSection />
    <Footer />
  </Fragment>
);
