// src/components/Services.js
import React from "react";

const Services = () => {
  return (
    <div className="services-area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6>Our Services</h6>
          <h2>We Provide Various <b>Delivery Services</b></h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-service">
              <h4>Standard Courier</h4>
              <p>This service involves transferring parcels to the closest depot to the delivery location.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-service">
              <h4>Express Courier</h4>
              <p>Urgent delivery sent and received on the same day.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-service">
              <h4>Pallet Courier</h4>
              <p>Strict delivery and promptly delivers goods on pallets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
