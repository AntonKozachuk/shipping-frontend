import React from 'react';
import aboutImage from '../assets/img/about/about-men.png'; // Update the path as needed

const AboutContent = () => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay=".3s">
      <div className="info-content-area">
        <div className="section-title">
          <h6>About Us</h6>
          <h2>
            We're leading <b>Courier <br />Service</b> Worldwide
          </h2>
        </div>
        <p>
          We serve worldwide, lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea enim et, similique, minus soluta ducimus.
        </p>
        <p className="highlight">Since our launch in 1995, we have delivered high-value packages.</p>
        <p className="highlight">We always provide flexible & quality tasks.</p>
        <p className="highlight">Unique latest machinery used in Logistics projects.</p>

        <div className="row founded">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="years">
              <span>25</span> Year of Success
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12">
            <div className="text">
              Since we established in 1995, we have experienced growth & continue to expand our portfolio day by day!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutImage = () => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay=".4s">
      <div className="info-img">
        <img src={aboutImage} alt="About us" />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="about-area section-padding pb-0">
      <div className="container">
        <div className="row">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;