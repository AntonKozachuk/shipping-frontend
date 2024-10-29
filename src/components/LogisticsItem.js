import React from 'react';

const LogisticsItem = ({ iconClass, title, description, link, backgroundClass }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="single-logistic-wrapper mt-40">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className={`single-logistic-bg bg-cover ${backgroundClass}`}>
              {/* This div now accepts a dynamic background class */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-logistic-area">
              <div className="service-icon">
                <i className={iconClass}></i> {/* Icon from the font */}
              </div>
              <h5>{title}</h5>
              <p>{description}</p>
              <a href={link} className="read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsItem;