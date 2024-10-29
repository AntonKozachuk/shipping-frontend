import React from 'react';

const Header = () => {
  return (
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
                <i className="las la-envelope"></i> info@wanrooytrans.com | 
                <i className="las la-map-marker"></i> Hameldonk 8, Teteringen, 4847Ex, Netherlands
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 text-right">
              <div className="site-info">
                <div className="social-area">
                  <a href="/dashboard">Dashboard</a> / 
                  <a href="/login">Login</a> / 
                  <a href="/register">Register</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 text-left col-sm-12">
              <div className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Language</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/locale/en">English</a>
                  <a className="dropdown-item" href="/locale/ru">Русский</a>
                  <a className="dropdown-item" href="/locale/de">Deutsch</a>
                  <a className="dropdown-item" href="/locale/es">Español</a>
                  <a className="dropdown-item" href="/locale/nl">Dutch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
