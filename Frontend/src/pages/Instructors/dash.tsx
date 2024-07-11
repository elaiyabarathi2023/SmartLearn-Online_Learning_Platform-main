import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
const baseImageUrl = 'http://localhost:8080/instructors/api/getImage/';


const Dash = () => {
    const { admin } = useAuth();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch('http://localhost:8080/instructors/courses');
                if (response.ok) {
                    const data = await response.json();
                    // setCourses(data);
                    // Filter courses where the admin's ID matches the course's admin ID
                    const filteredCourses = data.filter((course: any) => course.Admin_id._id === admin.userData._id);
                    setCourses(filteredCourses);
                } else {
                    console.error('Failed to fetch data from the API');
                }
            } catch (error) {
                console.error('Error while fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchCourses();
    }, [admin.userData._id]);

    


    return (

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                    <br/>
                    {/* <h1 className="mb-5">Your Courses</h1> */}
                </div>
                <div className="row g-4 justify-content-center">
                    {courses.map((course: any, index) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index + 1}s`} key={index}>
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={baseImageUrl + course.image} alt={course.title} width={600} height={200} />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-4 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Update</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-4" style={{ borderRadius: "0px 30px 30px 0px" }}>Delete</a>
                                    </div>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">₹{course.price}.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">{course.title}</h5>
                                </div>
                                <br/>
                                {/* <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>{course.Admin_id.username}</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Dash;