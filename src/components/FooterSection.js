import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="contacts"
      className="footer-area wow fadeIn"
      data-wow-delay=".2s"
    >
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="logo">
                <img
                  src="/shipping-frontend/assets/img/logo.png"
                  alt="expoint-logo"
                />
              </div>
              <p>{t('home.services.text')}</p>
              <div className="social-area">
                <a href="#">
                  <i className="lab la-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="lab la-instagram"></i>
                </a>
                <a href="#">
                  <i className="lab la-twitter"></i>
                </a>
                <a href="#">
                  <i className="la la-skype"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-12">
              <h5>{t('home.menu.menu')}</h5>
              <ul>
                <li>
                  <a href="#">{t('home.menu.home')}</a>
                  <a href="#service-1">{t('home.menu.services')}</a>
                  <a href="#about">{t('home.menu.about_us')}</a>
                  <a href="#achiv">{t('home.menu.achievements')}</a>
                  <a href="#contacts">{t('home.menu.contact')}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>{t('home.services.services')}</h5>
              <ul>
                <li>
                  <a href="#logistic-1">
                    <span>-</span> {t('home.services.avia')}
                  </a>
                  <a href="#logistic-1">
                    <span>-</span> {t('home.services.sea')}
                  </a>
                  <a href="#logistic-1">
                    <span>-</span> {t('home.services.car')}
                  </a>
                  <a href="#logistic-1">
                    <span>-</span> {t('home.services.train')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="subscribe-form">
                <h5>{t('home.services.news')}</h5>
                <p>{t('home.services.newsletter')}</p>
                <form action="http://capricorn-theme.net/html/expo/index.html">
                  <input type="email" placeholder={t('home.services.email')} />
                  <button className="main-btn">{t('home.services.btn')}</button>
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
