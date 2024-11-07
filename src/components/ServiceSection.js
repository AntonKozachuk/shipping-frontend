import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceItem from './ServiceItem';
import Modal from './Modal';

const ServicesSection = () => {
  const { t } = useTranslation();
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMoreClick = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="service-1" className="services-area bg-cover section-padding">
      <div className="overlay-2"></div>
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 text-center">
            <div className="section-title">
              <h2>{t('home.service.title')}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Service Items */}
          <ServiceItem
            iconClass="flaticon-delivery-man"
            title={t('home.service.courier')}
            description={t('home.service.courierShort')}
            link="#"
            serviceClass="service-1"
            delay=".2s"
            onReadMoreClick={() =>
              handleReadMoreClick(
                t('home.service.courier'),
                t('home.service.courierDesc')
              )
            }
          />
          <ServiceItem
            iconClass="flaticon-truck"
            title={t('home.service.project')}
            description={t('home.service.projectShort')}
            link="#"
            serviceClass="service-2"
            delay=".4s"
            onReadMoreClick={() =>
              handleReadMoreClick(
                t('home.service.project'),
                t('home.service.projectDesc')
              )
            }
          />
          <ServiceItem
            iconClass="flaticon-pallet"
            title={t('home.service.pallet')}
            description={t('home.service.palletShort')}
            link="#"
            serviceClass="service-3"
            delay=".6s"
            onReadMoreClick={() =>
              handleReadMoreClick(
                t('home.service.pallet'),
                t('home.service.palletDesc')
              )
            }
          />
          <ServiceItem
            iconClass="flaticon-fast-delivery"
            title={t('home.service.cold')}
            description={t('home.service.coldShort')}
            link="#"
            serviceClass="service-4"
            delay=".2s"
            onReadMoreClick={() =>
              handleReadMoreClick(
                t('home.service.cold'),
                t('home.service.coldDesc')
              )
            }
          />
          <ServiceItem
            iconClass="flaticon-air-freight"
            title={t('home.service.broker')}
            description={t('home.service.brokerShort')}
            link="#"
            serviceClass="service-5"
            delay=".4s"
            onReadMoreClick={() =>
              handleReadMoreClick(
                t('home.service.brokerTitle'),
                t('home.service.brokerDesc')
              )
            }
          />
          <ServiceItem
            iconClass="flaticon-wholesale"
            title={t('home.service.surveyor')}
            description={t('home.service.surveyorShort')}
            link="#"
            serviceClass="service-6"
            delay=".6s"
            onReadMoreClick={() =>
              handleReadMoreClick(
                t('home.service.surveyor'),
                t('home.service.surveyorDesc')
              )
            }
          />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={modalContent.title}
          description={modalContent.description}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ServicesSection;
