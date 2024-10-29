import React from 'react';
import LogisticsItem from './LogisticsItem';

const LogisticsSection = () => {
  return (
    <div id="logistic-1" className="logistic-area sky-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h6>Favourite Consignment</h6>
              <h2>Secured, Affordable & Reliable <br /> <b>Logistics Support</b></h2>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          {/* Logistics Items */}
          <LogisticsItem
            iconClass="flaticon-air-freight"
            title="Air Freight"
            description="There are some reasons to build the site lorem ipsum dolor sit amet."
            link="single-service.html"
            backgroundClass="logistic-bg-1" // Pass the dynamic background class
          />
          <LogisticsItem
            iconClass="flaticon-vessel"
            title="Sea Freight"
            description="There are some reasons to build the site lorem ipsum dolor sit amet."
            link="single-service.html"
            backgroundClass="logistic-bg-2" // Pass the dynamic background class
          />
          <LogisticsItem
            iconClass="flaticon-truck"
            title="Ground Freight"
            description="There are some reasons to build the site lorem ipsum dolor sit amet."
            link="single-service.html"
            backgroundClass="logistic-bg-3" // Pass the dynamic background class
          />
          <LogisticsItem
            iconClass="flaticon-pallet"
            title="Warehousing"
            description="There are some reasons to build the site lorem ipsum dolor sit amet."
            link="single-service.html"
            backgroundClass="logistic-bg-4" // Pass the dynamic background class
          />
        </div>
      </div>
    </div>
  );
};

export default LogisticsSection;