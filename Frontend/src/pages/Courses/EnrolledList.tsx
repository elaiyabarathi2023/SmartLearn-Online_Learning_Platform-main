import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import YouTube, { YouTubeProps } from 'react-youtube';
const baseImageUrl = 'http://localhost:8080/instructors/api/getImage/';


const EnrolledCourse: React.FC = () => {
    const { user } = useAuth();
    const [courses, setCourseDetails] = useState<any[]>([]);

    console.log(courses);

    useEffect(() => {
        async function checkEnrollmentStatus() {
            try {
                if (user) {
                    const userId = user?.userData?._id;
                    const apiUrl = `http://localhost:8080/instructors/enrolled_courses/${userId}`;

                    const response = await axios.get(apiUrl);

                    if (response.status === 200) {
                        const enrolledCourses = response.data;
                        setCourseDetails(enrolledCourses);
                    } else {
                        console.error('Failed to fetch enrollment data from the API');
                    }
                }
            } catch (error) {
                console.error('Error while checking enrollment status:', error);
            }
        }

        checkEnrollmentStatus();
    }, [user]);
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '250',
        width: '350',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    function extractVideoIdFromUrl(url: string): string | null {
        // Regular expression to match the video ID in a YouTube URL
        const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube-nocookie\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
    
        // Try to match the URL with the regular expression
        const match = url.match(regex);
    
        // If a match is found, return the video ID; otherwise, return null
        if (match && match[1]) {
            return match[1];
        } else {
            return null;
        }
    }
    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Enrolled Courses</h6>
                    <br />
                    {/* <h1 className="mb-5">Your Courses</h1> */}
                </div>
                <br/>
                <div className="row g-4 justify-content-center">
                    {courses.map((course: any) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" >
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                <YouTube videoId={extractVideoIdFromUrl(course.courseId.video_url) ?? undefined} opts={opts} onReady={onPlayerReady} />
                                    {/* <img className="img-fluid" src={baseImageUrl + course.courseId.image} alt={course.title} width={600} height={200} /> */}
                                    {/* <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-4 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Update</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-4" style={{ borderRadius: "0px 30px 30px 0px" }}>Delete</a>
                                    </div> */}
                                </div>
                                <div className="text-center p-4 pb-0">
                                    {/* <h3 className="mb-0">₹{course.price}.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small>(123)</small>
                                    </div> */}
                                    <h5 className="mb-4">{course.courseId.title}</h5>
                                </div>
                                <br />
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
};

export default EnrolledCourse;
