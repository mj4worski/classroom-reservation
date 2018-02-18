import React from 'react';
import imageSrc from '../../../../assets/images/agh.jpg';

const MainPage = () => (
  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src={imageSrc} alt="" />
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

export default MainPage;
