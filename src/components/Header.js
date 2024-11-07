import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

import enFlag from '../assets/img/flags/gb.svg';
import ruFlag from '../assets/img/flags/ru.svg';
import deFlag from '../assets/img/flags/de.svg';
import esFlag from '../assets/img/flags/es.svg';
import nlFlag from '../assets/img/flags/nl.svg';

const Header = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.history.pushState(null, '', `/locale/${lng}`);
  };

  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="contact-info">
              <i className="las la-envelope"></i> info@wanrooytrans.com |
              <i className="las la-map-marker"></i> Hameldonk 8, Teteringen,
              4847Ex, Netherlands
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 text-right">
            <div className="site-info">
              <div className="social-area">
                <a href="/dashboard">{t('navigation.dashboard')}</a> /
                <a href="/login">{t('navigation.login')}</a> /
                <a href="/register">{t('navigation.registration')}</a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-12 text-left col-sm-12">
            <div className="nav-item dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                {t('admin.language')}
              </a>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  onClick={() => changeLanguage('en')}
                  href="#"
                >
                  <img src={enFlag} alt="English Flag" className="flag-icon" />
                  &nbsp; English
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => changeLanguage('ru')}
                  href="#"
                >
                  <img src={ruFlag} alt="Russian Flag" className="flag-icon" />
                  &nbsp; Русский
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => changeLanguage('de')}
                  href="#"
                >
                  <img src={deFlag} alt="German Flag" className="flag-icon" />
                  &nbsp; Deutsch
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => changeLanguage('es')}
                  href="#"
                >
                  <img src={esFlag} alt="Spanish Flag" className="flag-icon" />
                  &nbsp; Español
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => changeLanguage('nl')}
                  href="#"
                >
                  <img src={nlFlag} alt="Dutch Flag" className="flag-icon" />
                  &nbsp; Dutch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
