import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HeaderArea = () => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavToggle = () => {
    setIsNavExpanded((prev) => !prev);
  };

  return (
    <header className={`header-area ${isSticky ? 'sticky' : ''}`}>
      <div id="sticky-wrapper" className="sticky-area">
        <div className="navigation">
          <div className="container">
            <div className="row">
              {/* Logo Section */}
              <div className="col-lg-2">
                <div className="logo">
                  <a className="navbar-brand" href="/">
                    <img
                      src="/shipping-frontend/assets/img/logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="sub-title">
                  <p>Courier & Logistics Service</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="main-menu">
                  <nav className="navbar navbar-expand-lg">
                    <button
                      className={`navbar-toggler ${isNavExpanded ? 'active' : ''}`}
                      type="button"
                      onClick={handleNavToggle}
                      aria-controls="navbarSupportedContent"
                      aria-expanded={isNavExpanded}
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className={`collapse navbar-collapse justify-content-center ${isNavExpanded ? 'show' : ''}`}
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <a className="nav-link active" href="/">
                            {t('home.menu.home')}
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#service-1">
                            {t('home.menu.services')}
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#about">
                            {t('home.menu.about_us')}
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#achiv">
                            {t('home.menu.achievements')}
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#contacts">
                            {t('home.menu.contact')}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderArea;
