import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import TestimonialItem from './TestimonialItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/style.css';

const TestimonialSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      avatar: '/shipping-frontend/assets/img/testimonial/2.jpg',
      content: t('home.comment.comment1'),
      name: t('home.comment.name1'),
      position: 'CEO & Founder-Linking Park',
    },
    {
      avatar: '/shipping-frontend/assets/img/testimonial/4.jpg',
      content: t('home.comment.comment2'),
      name: t('home.comment.name2'),
      position: 'CEO & Founder-Linking Park',
    },
    {
      avatar: '/shipping-frontend/assets/img/testimonial/3.jpg',
      content: t('home.comment.comment3'),
      name: t('home.comment.name3'),
      position: 'CEO & Founder-Linking Park',
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-scroll the slides
    autoplaySpeed: 5000, // Time between auto-scrolls (in milliseconds)
    arrows: false, // Hide the next/prev arrows
  };

  return (
    <div className="testimonial-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={index}
                  avatar={testimonial.avatar}
                  content={testimonial.content}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
