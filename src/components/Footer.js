import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 6000) {
        document.querySelector('.go-top').style.display = 'block';
      } else {
        document.querySelector('.go-top').style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>&copy; 2024 WanrooyTrans. All rights reserved.</p>
          </div>
          <div className="col-lg-6 text-right">
            <p>Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </div>
      <a href="#top" class="go-top"><i class="las la-angle-up"></i></a>
    </footer>
  );
};

export default Footer;
