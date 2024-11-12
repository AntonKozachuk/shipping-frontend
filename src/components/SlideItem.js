import React from 'react';

const SlideItem = ({
  backgroundClass,
  overlayClass,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  wowClass,
}) => {
  return (
    <div className={`single-slide-item ${backgroundClass}`}>
      <div className={overlayClass}></div>
      <div className="hero-area-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-lg-12 ${wowClass}`} data-wow-delay=".3s">
              <div className="section-title">
                <h6>{title}</h6>
                <h1>{subtitle}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
