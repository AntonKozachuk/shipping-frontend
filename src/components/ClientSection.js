import React from 'react';

const ClientSection = () => {
  const clientLogos = [
    'assets/img/client/1.png',
    'assets/img/client/2.png',
    'assets/img/client/3.png',
    'assets/img/client/4.png',
    'assets/img/client/5.png',
    // 'assets/img/client/6.png',
    // 'assets/img/client/7.png'
  ];

  return (
    <div className="client-area pt-50 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="client-carousel">
              {clientLogos.map((logo, index) => (
                <div key={index} className="single-logo-wrapper">
                  <div className="logo-inner-item">
                    <img src={logo} alt="Client Logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
