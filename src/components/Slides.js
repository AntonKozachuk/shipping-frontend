import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import SlideItem from './SlideItem';

const Slides = () => {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nav: true,
    arrows: false,
    prevArrow: (
      <button type="button" className="slick-prev">
        <i className="la la-angle-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <i className="la la-angle-right"></i>
      </button>
    ),
    beforeChange: () => {
      document
        .querySelectorAll('.single-slide-item h1')
        .forEach((el) => el.classList.remove('animated', 'fadeInUp'));
      document
        .querySelectorAll('.single-slide-item h6')
        .forEach((el) => el.classList.remove('animated', 'fadeInDown'));
      document
        .querySelectorAll('.single-slide-item p')
        .forEach((el) => el.classList.remove('animated', 'fadeInDown'));
      document
        .querySelectorAll('.single-slide-item a.main-btn')
        .forEach((el) => el.classList.remove('animated', 'fadeInDown'));
    },
    afterChange: () => {
      document
        .querySelectorAll('.single-slide-item h1')
        .forEach((el) => el.classList.add('animated', 'fadeInUp'));
      document
        .querySelectorAll('.single-slide-item h6')
        .forEach((el) => el.classList.add('animated', 'fadeInDown'));
      document
        .querySelectorAll('.single-slide-item p')
        .forEach((el) => el.classList.add('animated', 'fadeInDown'));
      document
        .querySelectorAll('.single-slide-item a.main-btn')
        .forEach((el) => el.classList.add('animated', 'fadeInDown'));
    },
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="homepage-slides">
      <Slider {...settings}>
        <SlideItem
          backgroundClass=""
          overlayClass="overlay"
          title={t('home.slide.slideTitleOne')}
          subtitle={`${t('home.slide.slideOne')} \n ${t('home.slide.slideTwoPart')}`}
          description={t('home.slide.one')}
          buttonText={t('home.slide.oneT')}
          buttonLink="about.html"
          wowClass="wow slideInLeft"
        />

        <SlideItem
          backgroundClass="hero-area-bg-2"
          overlayClass="overlay"
          title={t('home.slide.slideTitleTwo')}
          subtitle={`${t('home.slide.slideTwo')} \n ${t('home.slide.slideTwoPart')}`}
          description={t('home.slide.two')}
          buttonText={t('home.slide.twoT')}
          buttonLink="quote.html"
          wowClass="wow slideInLeft"
        />

        <SlideItem
          backgroundClass="hero-area-bg-3"
          overlayClass="overlay"
          title={t('home.slide.slideTitleThree')}
          subtitle={`${t('home.slide.slideThree')} \n ${t('home.slide.slideTitleThreePart')}`}
          description={t('home.slide.three')}
          buttonText={t('home.slide.threeT')}
          buttonLink="services.html"
          wowClass="wow slideInLeft"
        />
      </Slider>
    </div>
  );
};

export default Slides;
