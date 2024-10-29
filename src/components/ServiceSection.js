import React from 'react';
import ServiceItem from './ServiceItem';

const ServicesSection = () => {
  return (
    <div id="service-1" className="services-area bg-cover section-padding">
      <div className="overlay-2"></div>
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 text-center">
            <div className="section-title">
              <h6>Services</h6>
              <h2>We Provide Various Category <br /><b>Delivery Services</b></h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Service Items */}
          <ServiceItem
            iconClass="flaticon-delivery-man"
            title="Standard Courier"
            description="This services involve transferring the parcels to the closest depot to the delivery location."
            link="single-service.html"
            serviceClass="service-1" // Dynamic class for the service
            delay=".2s"
          />
          <ServiceItem
            iconClass="flaticon-truck"
            title="Express Courier"
            description="This is a service provided to those who need urgent delivery to be sent and received on the same day."
            link="single-service.html"
            serviceClass="service-2" // Dynamic class for the service
            delay=".4s"
          />
          <ServiceItem
            iconClass="flaticon-pallet"
            title="Pallet Courier"
            description="This is a service that safely strict delivery and promptly delivers goods on pallets."
            link="single-service.html"
            serviceClass="service-3" // Dynamic class for the service
            delay=".6s"
          />
          <ServiceItem
            iconClass="flaticon-fast-delivery"
            title="Over Night Courier"
            description="This courier will usually transport the goods during the night or early of the morning."
            link="single-service.html"
            serviceClass="service-4" // Dynamic class for the service
            delay=".2s"
          />
          <ServiceItem
            iconClass="flaticon-air-freight"
            title="International Courier"
            description="This is a transport service of goods or documents from one country to another country."
            link="single-service.html"
            serviceClass="service-5" // Dynamic class for the service
            delay=".4s"
          />
          <ServiceItem
            iconClass="flaticon-wholesale"
            title="Warehousing"
            description="This type of service will involve managed storage solutions to give companies greater control."
            link="single-service.html"
            serviceClass="service-6" // Dynamic class for the service
            delay=".6s"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;