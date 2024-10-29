import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "When can I expect my delivery?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
    },
    {
      question: "What is the first possible pick-up date?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
    },
    {
      question: "How can I pay for the service?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
    },
    {
      question: "How can I collect my parcel in the parcel shop?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
            <div className="faq-bg bg-cover">
              {/* Add your background image here */}
            </div>
          </div>
          <div className="col-lg-5 mt-40 wow fadeInRight" data-wow-delay=".4s">
            <div className="section-title">
              <h6>Helpful FAQ's</h6>
              <h2>Frequently Asked <b>Questions</b></h2>
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
                        {faq.answer}
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