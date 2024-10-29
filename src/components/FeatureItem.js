// FeatureItem.js
import React from 'react';

const FeatureItem = ({ iconSrc, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-feature-item">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="feat-icon">
              <img src={iconSrc} alt={title} />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="feat-content">
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;