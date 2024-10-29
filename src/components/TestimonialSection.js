import React from 'react';
import Slider from 'react-slick';
import TestimonialItem from './TestimonialItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/style.css';

const testimonials = [
  {
    avatar: 'assets/img/testimonial/2.jpg',
    content: 'There are some reason lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, officia eligendi quos best choice similique autem laborum repellendus aliquam, support all molestiae tempora quod esse sed. amazing service.',
    name: 'Mihir Kanti Ghosh',
    position: 'CEO & Founder-Linking Park'
  },
  {
    avatar: 'assets/img/testimonial/4.jpg',
    content: 'There are some reason lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, officia eligendi quos best choice similique autem laborum repellendus aliquam, support all molestiae tempora quod esse sed. amazing service.',
    name: 'Mihir Kanti Ghosh',
    position: 'CEO & Founder-Linking Park'
  },
  {
    avatar: 'assets/img/testimonial/3.jpg',
    content: 'There are some reason lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, officia eligendi quos best choice similique autem laborum repellendus aliquam, support all molestiae tempora quod esse sed. amazing service.',
    name: 'Mihir Kanti Ghosh',
    position: 'CEO & Founder-Linking Park'
  }
];

const TestimonialSection = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-scroll the slides
    autoplaySpeed: 5000, // Time between auto-scrolls (in milliseconds)
    arrows: false // Hide the next/prev arrows
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