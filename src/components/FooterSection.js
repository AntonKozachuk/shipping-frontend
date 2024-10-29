import React from 'react';

const FooterSection = () => {
  return (
    <footer className="footer-area wow fadeIn" data-wow-delay=".2s">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="logo">
                <img src="assets/img/logo-white.png" alt="expoint-logo" />
              </div>
              <p>We are the Top Courier Service Provider and Logistics Solutions. We’re services around over the worldwide. We never give up on the challenges.</p>
              <div className="social-area">
                <a href="#"><i className="lab la-facebook-f"></i></a>
                <a href="#"><i className="lab la-instagram"></i></a>
                <a href="#"><i className="lab la-twitter"></i></a>
                <a href="#"><i className="la la-skype"></i></a>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-12">
              <h5>Explore</h5>
              <ul>
                <li><a href="#">About Company</a></li>
                <li><a href="#">Latest News</a></li>
                <li><a href="#">Get a Quote</a></li>
                <li><a href="#">Pricing Guide</a></li>
                <li><a href="#">Helpful FAQ</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Services</h5>
              <ul>
                <li><a href="#"><span>-</span> Express Courier</a></li>
                <li><a href="#"><span>-</span> Pallet Courier</a></li>
                <li><a href="#"><span>-</span> Air Freight</a></li>
                <li><a href="#"><span>-</span> Ocean Freight</a></li>
                <li><a href="#"><span>-</span> Warehousing</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="subscribe-form">
                <h5>Newsletter</h5>
                <p>Sign Up now for latest news update</p>
                <form action="http://capricorn-theme.net/html/expo/index.html">
                  <input type="email" placeholder="Your email" />
                  <button className="main-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
