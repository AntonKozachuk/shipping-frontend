// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Slides = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {/* First Slide */}
//       <div className="single-slide-item">
//         <div className="overlay"></div>
//         <div className="hero-area-content">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-12 wow fadeInUp animated" data-wow-delay=".3s">
//                 <div className="section-title">
//                   <h6>{'home/slide.slideTitleOne'}</h6>
//                   <h1>
//                     {'home/slide.label'} <br />
//                     <b>{'home/slide.slideOne'}</b>
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Slide */}
//       <div className="single-slide-item hero-area-bg-2">
//         <div className="overlay"></div>
//         <div className="hero-area-content">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-12 wow fadeInUp animated" data-wow-delay=".3s">
//                 <div className="section-title">
//                   <h6>{'home/slide.slideTitleTwo'}</h6>
//                   <h1>
//                     {'home/slide.slideTwo'} <br />
//                     <b>{'home/slide.slideTwoPart'}</b>
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Third Slide */}
//       <div className="single-slide-item hero-area-bg-2">
//         <div className="overlay"></div>
//         <div className="hero-area-content">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-12 wow fadeInUp animated" data-wow-delay=".3s">
//                 <div className="section-title">
//                   <h6>{'home/slide.slideTitleOne'}</h6>
//                   <h1>
//                     {'home/slide.slideTitleThree'} <br />
//                     <b>{'home/slide.label'}</b> {'home/slide.slideTitleThreePart'}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Slider>
//   );
// };

// export default Slides;

import React from 'react';
import Slider from 'react-slick';

const Slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nav: true,
    arrows: true,
    prevArrow: <button type="button" className="slick-prev"><i className='la la-angle-left'></i></button>,
    nextArrow: <button type="button" className="slick-next"><i className='la la-angle-right'></i></button>,
    beforeChange: () => {
      document.querySelectorAll(".single-slide-item h1").forEach(el => el.classList.remove("animated", "fadeInUp"));
      document.querySelectorAll(".single-slide-item h6").forEach(el => el.classList.remove("animated", "fadeInDown"));
      document.querySelectorAll(".single-slide-item p").forEach(el => el.classList.remove("animated", "fadeInDown"));
      document.querySelectorAll(".single-slide-item a.main-btn").forEach(el => el.classList.remove("animated", "fadeInDown"));
    },
    afterChange: () => {
      document.querySelectorAll(".single-slide-item h1").forEach(el => el.classList.add("animated", "fadeInUp"));
      document.querySelectorAll(".single-slide-item h6").forEach(el => el.classList.add("animated", "fadeInDown"));
      document.querySelectorAll(".single-slide-item p").forEach(el => el.classList.add("animated", "fadeInDown"));
      document.querySelectorAll(".single-slide-item a.main-btn").forEach(el => el.classList.add("animated", "fadeInDown"));
    },
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="homepage-slides">
      <Slider {...settings}>
        <div className="single-slide-item">
          <div className="overlay"></div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 wow slideInLeft" data-wow-delay=".3s">
                  <div className="section-title">
                    <h6>Welcome to Expoint</h6>
                    <h1>We are experts in<br /> <b>Global Courier</b></h1>
                    <p>Logistics Revolution, in modern history, the process of change from an agrarian <br />and handicraft economy to one dominated by courier and delivery services.</p>
                  </div>
                  <a href="about.html" className="main-btn">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-slide-item hero-area-bg-2">
          <div className="overlay"></div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 wow slideInLeft" data-wow-delay=".3s">
                  <div className="section-title">
                    <h6>Since in 1995</h6>
                    <h1>Best Solutions for<br /> <b>Delivery</b> Services</h1>
                    <p>Logistics Revolution, in modern history, the process of change from an agrarian <br />and handicraft economy to one dominated by courier and delivery services.</p>
                  </div>
                  <a href="quote.html" className="main-btn">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slides;

