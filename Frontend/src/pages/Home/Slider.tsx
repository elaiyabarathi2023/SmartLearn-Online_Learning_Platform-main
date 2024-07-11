import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS styles for the carousel
import carousel1 from '../../assets/img/carousel-1.jpg';
import carousel2 from '../../assets/img/carousel-2.jpg';
const CarouselComponent = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <Carousel
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true} // Enable auto-play
        interval={5000} // Set the interval in milliseconds (e.g., 5000ms = 5 seconds)
        stopOnHover={false} // Stop auto-play on hover
      >
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src={carousel1} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                  <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src={carousel2} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                  <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
