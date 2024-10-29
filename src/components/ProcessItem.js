import React from 'react';

const ProcessItem = ({ icon, title, description, delay }) => {
  return (
    <div className={`col-lg-3 col-md-6 col-sm-12`}>
      <div className={`single-process-area wow fadeInLeft`} data-wow-delay={delay}>
        <div className="process-icon">
          <img src={icon} alt={title} />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProcessItem;