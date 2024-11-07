import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FaqSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: t("home.achievements.titleTwo"),
      answer: t("home.achievements.two")
    },
    {
      question: t("home.achievements.titleThree"),
      answer: t("home.achievements.three")
    },
    {
      question: t("home.achievements.titleFour"),
      answer: t("home.achievements.four")
    },
    {
      question: t("home.achievements.titleFive"),
      answer: t("home.achievements.five")
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="achiv" className="faq-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
            <div className="faq-bg bg-cover">
              {/* Add your background image here */}
            </div>
          </div>
          <div className="col-lg-5 wow fadeInRight" data-wow-delay=".4s">
            <div className="section-title">
              <h6>{t('home.achievements.titleOne')}</h6>
              <p>{t('home.achievements.one')}</p>
            </div>
            <div className="styled-faq">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                {faqs.map((faq, index) => (
                  <div className="panel panel-default" key={index}>
                    <div className="panel-heading" role="tab" id={`heading${index}`}>
                      <h6 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          aria-expanded={activeIndex === index}
                          aria-controls={`collapse${index}`}
                          onClick={() => handleToggle(index)}
                          className={activeIndex === index ? '' : 'collapsed'}
                        >
                          {faq.question}
                          <i className={`fa ${activeIndex === index ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                        </a>
                      </h6>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`panel-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                      role="tabpanel"
                      aria-labelledby={`heading${index}`}
                    >
                      <div className="panel-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
