import React from 'react';

const Hero = () => {
  return (
    <div className="homepage-slides owl-carousel">
      <div className="single-slide-item">
        <div className="overlay"></div>
        <div className="hero-area-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section-title">
                  <h6>Welcome to WanrooyTrans</h6>
                  <h1>Your global logistics partner</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* You can add more slides as needed */}
    </div>
  );
};

export default Hero;
