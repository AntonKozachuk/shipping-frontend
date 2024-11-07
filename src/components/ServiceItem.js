import React from 'react';

const ServiceItem = ({
  iconClass,
  title,
  description,
  link,
  serviceClass,
  delay,
  onReadMoreClick,
}) => {
  const handleReadMoreClick = (event) => {
    event.preventDefault();
    onReadMoreClick(title, description);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div
        className={`single-service-area ${serviceClass} mt-30 mb-50 wow fadeInLeft`}
        data-wow-delay={delay}
      >
        <div className="service-icon">
          <i className={iconClass}></i>{' '}
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={link} className="read-more" onClick={handleReadMoreClick}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default ServiceItem;
