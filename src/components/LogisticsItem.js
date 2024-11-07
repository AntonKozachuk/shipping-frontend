import React from 'react';
import { useTranslation } from 'react-i18next';

const LogisticsItem = ({
  iconClass,
  title,
  description,
  onReadMoreClick,
  backgroundClass,
}) => {
  const { t } = useTranslation();

  const handleReadMoreClick = (event) => {
    // Prevent any default behavior that would cause the screen to jump
    event.preventDefault();
    onReadMoreClick();
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="single-logistic-wrapper mt-40">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div
              className={`single-logistic-bg bg-cover ${backgroundClass}`}
            ></div>
          </div>
          <div className="col-lg-6">
            <div className="single-logistic-area">
              <div className="service-icon">
                <i className={iconClass}></i>
              </div>
              <h5>{title}</h5>
              <p>{description}</p>
              <a href="#" onClick={handleReadMoreClick} className="read-more">
                {t('logistic_type.more')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsItem;
