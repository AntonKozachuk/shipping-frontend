import React from 'react';
import ProcessItem from './ProcessItem';
import { useTranslation } from 'react-i18next';

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <div className="process-area section-padding">
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 text-center">
            <div className="section-title">
              <h6>{t('home.process.sub_title')}</h6>
              <h2>{t('home.process.title')}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <ProcessItem
            icon="/shipping-frontend/assets/img/icon/web.png"
            title={t('home.process.one_title')}
            description={t('home.process.one')}
            delay=".2s"
          />
          <ProcessItem
            icon="/shipping-frontend/assets/img/icon/document.png"
            title={t('home.process.two_title')}
            description={t('home.process.two')}
            delay=".4s"
          />
          <ProcessItem
            icon="/shipping-frontend/assets/img/icon/call-center.png"
            title={t('home.process.three_title')}
            description={t('home.process.three')}
            delay=".6s"
          />
          <ProcessItem
            icon="/shipping-frontend/assets/img/icon/package.png"
            title={t('home.process.four_title')}
            description={t('home.process.four')}
            delay=".8s"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
