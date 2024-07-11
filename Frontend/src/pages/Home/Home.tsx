import '../../assets/css/style.css';
import React, { Component, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import CSS files in your React component or a separate CSS file
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS styles for the carousel

// import '../../assets/lib/animate/animate.min.css';
// import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css';
import about from '../../assets/img/about.jpg';
import Rcarousel1 from '../../assets/img/carousel-1.jpg';
import carousel2 from '../../assets/img/carousel-2.jpg';
import Rcat1 from '../../assets/img/cat-1.jpg';
import Rcat2 from '../../assets/img/cat-2.jpg';
import Rcat3 from '../../assets/img/cat-3.jpg';
import Rcat4 from '../../assets/img/cat-4.jpg';
import Course1 from '../../assets/img/course-1.jpg';
import RCourse2 from '../../assets/img/course-2.jpg';
import RCourse3 from '../../assets/img/course-3.jpg';
import team1 from '../../assets/img/team-1.jpg';
import Rteam2 from '../../assets/img/team-2.jpg';
import Rteam3 from '../../assets/img/team-3.jpg';
import Rteam4 from '../../assets/img/team-4.jpg';
import Rtestimonial1 from '../../assets/img/testimonial-1.jpg';
import testimonial2 from '../../assets/img/testimonial-2.jpg';
import Rtestimonial3 from '../../assets/img/testimonial-3.jpg';
import testimonial4 from '../../assets/img/testimonial-4.jpg';
import HeaderCarousel from './Slider';
import 'wowjs/css/libs/animate.css';

// import WOW from 'react-wow';
const WOW = require('wowjs');



// Define the carousel options type

const Home: React.FC = () => {
    // spinner

    useEffect(() => {
        const hideSpinner = () => {
            const spinner = document.getElementById('spinner');
            if (spinner) {
                spinner.classList.remove('show');
            }
        };

        setTimeout(hideSpinner, 1);
        // window.addEventListener("DOMContentLoaded", () => {
        //     const wow = new WOW(
        //         {
        //             boxClass: "wow",      // default
        //             animateClass: "animated",   // default
        //             offset: 0,          // distance to trigger animation (default is 0)
        //             mobile: true,       // trigger animations on mobile devices (default is true)
        //             live: true,         // act on asynchronously loaded content (default is true)
        //             scrollContainer: null,     // optional scroll container selector, otherwise use window
        //             resetAnimation: false,     // reset animation on end

        //         }
        //     );
        //     wow.init();
        //   });
        // window.addEventListener("scroll", function() {
        //     new WOW().init();
        // });        
        const handleScroll = () => {
            if (window.scrollY > 300) {
                const stickyTop = document.querySelector('.sticky-top') as HTMLElement;
                if (stickyTop) {
                    stickyTop.style.top = '0px';
                }
            } else {
                const stickyTop = document.querySelector('.sticky-top') as HTMLElement;
                if (stickyTop) {
                    stickyTop.style.top = '-100px';
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        // Initialize Wow.js when the component mounts
        const wow = new WOW.WOW({
            boxClass: 'wow', // CSS class that triggers the animation
            animateClass: 'animated', // CSS class for animated elements
            offset: 0, // How far the element is from the viewport to trigger the animation
            mobile: true, // Enable animations on mobile devices
            live: true, // Live mode (default is true) to reapply animations when new content is added
        });
        wow.init();
    }, []); // Empty dependency array to run the effect only once when the component mounts




    // useEffect(() => {
    //     const options = {
    //       autoplay: true,
    //       smartSpeed: 1500,
    //       items: 1,
    //       dots: false,
    //       loop: true,
    //       nav: true,
    //       navText: [
    //         '<i className="bi bi-chevron-left"></i>',
    //         '<i className="bi bi-chevron-right"></i>',
    //       ],
    //     };

    //     const carouselElement = document.querySelector(".header-carousel");

    //     if (carouselElement) {
    //         // @ts-ignore
    //         $(carouselElement).owlCarousel(options);
    //       }
    //   }, []);

    return (
        <>

            {/* <!-- Spinner Start --> */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem", }}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* <!-- Spinner End --> */}



            <HeaderCarousel />


            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                                    <h5 className="mb-3">Skilled Instructors</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                    <h5 className="mb-3">Online classNamees</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-home text-primary mb-4"></i>
                                    <h5 className="mb-3">Home Projects</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                                    <h5 className="mb-3">Book Library</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}



            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src={about} alt="" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                            <h1 className="mb-4">Welcome to eLEARNING</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online classNamees</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online classNamees</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Categories Start --> */}
            <div className="container-xxl py-5 category">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                        <h1 className="mb-5">Courses Categories</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src={Rcat1} alt="" />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                            <h5 className="m-0">Web Design</h5>
                                            <small className="text-primary">49 Courses</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src={Rcat2} alt="" />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                            <h5 className="m-0">Graphic Design</h5>
                                            <small className="text-primary">49 Courses</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src={Rcat3} alt="" />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                            <h5 className="m-0">Video Editing</h5>
                                            <small className="text-primary">49 Courses</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: "350px" }}>
                            <a className="position-relative d-block h-100 overflow-hidden" href="">
                                <img className="img-fluid position-absolute w-100 h-100" src={Rcat4} alt="" style={{ objectFit: "cover" }} />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                    <h5 className="m-0">Online Marketing</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Categories Start --> */}


            {/* <!-- Courses Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Popular Courses</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={Course1} alt="" />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                    </div>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">$149.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={RCourse2} alt="" />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                    </div>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">$149.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={RCourse3} alt="" />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                    </div>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">$149.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Courses End --> */}


            {/* <!-- Team Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                        <h1 className="mb-5">Expert Instructors</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team1} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Rteam2} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Rteam3} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Rteam4} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}


            {/* <!-- Testimonial Start --> */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                        <h1 className="mb-5">Our Students Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <Carousel
                            showThumbs={false}
                            showArrows={true}
                            showStatus={false}
                            infiniteLoop={true}
                            autoPlay={true} // Enable auto-play
                            interval={3000} // Set the interval in milliseconds (e.g., 5000ms = 5 seconds)
                            stopOnHover={false} // Stop auto-play on hover
                        >
                            <div className="testimonial-item text-center">
                                <img className="border rounded-circle p-2 mx-auto mb-3" src={Rtestimonial1} style={{ width: "80px", height: "80px" }} />
                                <h5 className="mb-0">Client Name</h5>
                                <p>Profession</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="border rounded-circle p-2 mx-auto mb-3" src={testimonial2} style={{ width: "80px", height: "80px" }} />
                                <h5 className="mb-0">Client Name</h5>
                                <p>Profession</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="border rounded-circle p-2 mx-auto mb-3" src={Rtestimonial3} style={{ width: "80px", height: "80px" }} />
                                <h5 className="mb-0">Client Name</h5>
                                <p>Profession</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="border rounded-circle p-2 mx-auto mb-3" src={testimonial4} style={{ width: "80px", height: "80px" }} />
                                <h5 className="mb-0">Client Name</h5>
                                <p>Profession</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                </div>
                            </div>
                            </Carousel>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Quick Link</h4>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Privacy Policy</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">FAQs & Help</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Gallery</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={Course1} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={RCourse2} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={RCourse3} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={RCourse2} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={RCourse3} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={Course1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.


                                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* </body > */}
        </>

    )
}

export default Home;