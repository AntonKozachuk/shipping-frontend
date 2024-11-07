import React from 'react';
import FeatureItem from './FeatureItem';
import { useTranslation } from 'react-i18next';

// Importing image assets (you can replace with actual paths)
import businessIcon from '../assets/img/icon/business.png';
import serviceIcon from '../assets/img/icon/24-hours.png';
import bounceRateIcon from '../assets/img/icon/bounce-rate.png';

const FeatureArea = () => {
  const { t } = useTranslation();

  return (
    <div className="feature-area">
      <div className="container">
        <div className="row">
          <FeatureItem
            iconSrc={businessIcon}
            title={t('home.slide.oneT')}
            description={t('home.slide.one')}
          />
          <FeatureItem
            iconSrc={serviceIcon}
            title={t('home.slide.twoT')}
            description={t('home.slide.two')}
          />
          <FeatureItem
            iconSrc={bounceRateIcon}
            title={t('home.slide.threeT')}
            description={t('home.slide.three')}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
