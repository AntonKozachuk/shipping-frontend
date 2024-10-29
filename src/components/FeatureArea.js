// FeatureArea.js
import React from 'react';
import FeatureItem from './FeatureItem';

// Importing image assets (you can replace with actual paths)
import businessIcon from '../assets/img/icon/business.png';
import serviceIcon from '../assets/img/icon/24-hours.png';
import bounceRateIcon from '../assets/img/icon/bounce-rate.png';

const FeatureArea = () => {
  return (
    <div className="feature-area">
      <div className="container">
        <div className="row">
          <FeatureItem
            iconSrc={businessIcon}
            title="Flat Rate Fees"
            description="It is a long established fact that and reader will by the readable based."
          />
          <FeatureItem
            iconSrc={serviceIcon}
            title="24/7 Services"
            description="It is a long established fact that and reader will by the readable based."
          />
          <FeatureItem
            iconSrc={bounceRateIcon}
            title="Free Estimate"
            description="It is a long established fact that and reader will by the readable based."
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;