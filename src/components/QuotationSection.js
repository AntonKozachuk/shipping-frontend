import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const QuotationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courierType: 'Standard',
    locationFrom: '',
    locationTo: '',
    freightType: 'Air Freight',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="quotation-section bg-cover section-padding">
      <div className="overlay-2"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h6>Quotation</h6>
              <h2>
                Get Free <b>Quotation</b> for <br /> Your <b>Choice</b>
              </h2>
            </div>
          </div>
        </div>
        <div className="quotation-block wow fadeInUp" data-wow-delay=".3s">
          <form className="quotation-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="phone">Phone No.</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No."
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group">
                  <label>Select Courier Type</label>
                  <select
                    className="form-control"
                    name="courierType"
                    value={formData.courierType}
                    onChange={handleChange}
                    id="courier-type-box"
                  >
                    <option>Standard</option>
                    <option>Express</option>
                    <option>International</option>
                    <option>Pallet</option>
                    <option>Warehousing</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Select Location</label>
                  <div className="row no-gutters">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        name="locationFrom"
                        value={formData.locationFrom}
                        onChange={handleChange}
                        placeholder="From"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        name="locationTo"
                        value={formData.locationTo}
                        onChange={handleChange}
                        placeholder="To"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group">
                  <label>Select Freight</label>
                  <select
                    className="form-control"
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleChange}
                  >
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                    <option>Ground Freight</option>
                    <option>Rail Freight</option>
                    <option>Warehousing</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="request-button">
                  <button type="submit" className="main-btn">
                    Send Request <i className="las la-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="quotation-dtl text-white">
            <p>
              <i className="las la-mobile"></i> {t('home.form.quotation-dtl')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationSection;
