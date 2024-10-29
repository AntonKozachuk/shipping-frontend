import React from 'react';
import ProcessItem from './ProcessItem';

const ProcessSection = () => {
  return (
    <div className="process-area section-padding">
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 text-center">
            <div className="section-title">
              <h6>Our Process</h6>
              <h2>How We <b>Work</b> for <b>Customers</b></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <ProcessItem
            icon="assets/img/icon/web.png"
            title="Apply Online"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            delay=".2s"
          />
          <ProcessItem
            icon="assets/img/icon/document.png"
            title="Documentation"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            delay=".4s"
          />
          <ProcessItem
            icon="assets/img/icon/call-center.png"
            title="Processing"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            delay=".6s"
          />
          <ProcessItem
            icon="assets/img/icon/package.png"
            title="Final Destination"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            delay=".8s"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;