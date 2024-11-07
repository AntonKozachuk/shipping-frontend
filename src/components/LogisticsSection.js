import React, { useState } from 'react';
import LogisticsItem from './LogisticsItem';
import { useTranslation } from 'react-i18next';
import Modal from './Modal'; // Using your custom Modal component

const LogisticsSection = () => {
  const { t } = useTranslation();

  const [selectedLogistic, setSelectedLogistic] = useState(null);

  const handleOpenModal = (logisticType) => {
    setSelectedLogistic(logisticType);
  };

  const handleCloseModal = () => {
    setSelectedLogistic(null);
  };

  return (
    <div id="logistic-1" className="logistic-area sky-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2>{t('home.services.title')}</h2>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <LogisticsItem
            iconClass="flaticon-air-freight"
            title={t('logistic_type.type1title')}
            description={t('logistic_type.typeShort')}
            onReadMoreClick={() => handleOpenModal('type1')}
            backgroundClass="logistic-bg-1"
          />
          <LogisticsItem
            iconClass="flaticon-vessel"
            title={t('logistic_type.type2title')}
            description={t('logistic_type.type2Short')}
            onReadMoreClick={() => handleOpenModal('type2')}
            backgroundClass="logistic-bg-2"
          />
          <LogisticsItem
            iconClass="flaticon-truck"
            title={t('logistic_type.type3title')}
            description={t('logistic_type.type3Short')}
            onReadMoreClick={() => handleOpenModal('type3')}
            backgroundClass="logistic-bg-3"
          />
          <LogisticsItem
            iconClass="flaticon-pallet"
            title={t('logistic_type.type4title')}
            description={t('logistic_type.type4Short')}
            onReadMoreClick={() => handleOpenModal('type4')}
            backgroundClass="logistic-bg-4"
          />
        </div>
      </div>

      {selectedLogistic && (
        <Modal
          title={t(`logistic_type.${selectedLogistic}title`)}
          description={t(`logistic_type.${selectedLogistic}`)}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default LogisticsSection;
