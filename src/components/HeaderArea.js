import React from 'react';

const HeaderArea = () => {
  return (
    <header className="header-area">
      <div className="sticky-area">
        <div className="navigation">
          <div className="container">
            <div className="row">
              {/* Logo Section */}
              <div className="col-lg-2">
                <div className="logo">
                  <a className="navbar-brand" href="index-2.html">
                    <img src="assets/img/logo.png" alt="logo" />
                  </a>
                </div>
              </div>

              {/* Sub-title Section */}
              <div className="col-lg-3">
                <div className="sub-title">
                  <p>Courier & Logistics Service</p>
                </div>
              </div>

              {/* Navigation Section */}
              <div className="col-lg-6">
                <div className="main-menu">
                  <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Home
                          </a>
                          <ul className="sub-menu">
                            <li><a href="index-2.html">Home- Main</a></li>
                            <li><a href="index-3.html">Home- Courier</a></li>
                            <li><a href="index-4.html">Home- Logistics</a></li>
                          </ul>
                        </li>

                        {/* Pages Section */}
                        <li className="nav-item">
                          <a className="nav-link" href="#">Pages</a>
                          <ul className="sub-menu">
                            <li><a href="about.html">About us</a></li>
                            <li><a href="choose-us.html">Why Choose Us</a></li>
                            <li><a href="team.html">Our Team</a></li>
                            <li><a href="price.html">Pricing</a></li>
                            <li><a href="quote.html">Quotation</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                          </ul>
                        </li>

                        {/* Services Section */}
                        <li className="nav-item">
                          <a className="nav-link" href="#">Services</a>
                          <ul className="sub-menu">
                            <li><a href="services-1.blade.php">Services-01</a></li>
                            <li><a href="services-2.html">Services-02</a></li>
                            <li><a href="single-service.html">Service Details</a></li>
                          </ul>
                        </li>

                        {/* Freight Section */}
                        <li className="nav-item">
                          <a className="nav-link" href="#">Freight</a>
                          <ul className="sub-menu">
                            <li><a href="air-freight.html">Air Freight</a></li>
                            <li><a href="sea-freight.html">Sea Freight</a></li>
                            <li><a href="ground-freight.html">Ground Freight</a></li>
                            <li><a href="rail-freight.html">Rail Freight</a></li>
                          </ul>
                        </li>

                        {/* Blog Section */}
                        <li className="nav-item">
                          <a className="nav-link" href="#">Blog</a>
                          <ul className="sub-menu">
                            <li><a href="blog-classic.html">Blog-Classic</a></li>
                            <li><a href="blog-grid.html">Blog-Grid</a></li>
                            <li><a href="single-blog.html">Blog Details</a></li>
                          </ul>
                        </li>

                        {/* Contact */}
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Search Icon */}
              <div className="col-lg-1">
                <div className="header-right-content">
                  <div className="search-box">
                    <button className="search-btn">
                      <i className="la la-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Dropdown Area */}
      <div className="search-popup">
        <span className="search-back-drop"></span>

        <div className="search-inner">
          <div className="auto-container">
            <div className="upper-text">
              <div className="text">Search for anything.</div>
              <button className="close-search"><span className="la la-times"></span></button>
            </div>

            <form method="post" action="#">
              <div className="form-group">
                <input type="search" name="search-field" placeholder="Search..." required />
                <button type="submit"><i className="la la-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderArea;
