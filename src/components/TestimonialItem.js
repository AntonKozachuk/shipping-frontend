import React from 'react';

const TestimonialItem = ({ avatar, content, name, position }) => {
  return (
    <div className="single-testimonial-item">
      <div className="testimonial-avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="testimonial-content">
        <div className="testimonial-icon-before">
          <i className="las la-quote-left"></i>
        </div>
        <p>{content}</p>
        <div className="testimonial-icon-after">
          <i className="las la-quote-right"></i>
        </div>
        <h4>
          {name} <span>{position}</span>
        </h4>
      </div>
    </div>
  );
};

export default TestimonialItem;
