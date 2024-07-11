// import React from 'react';
// import { useParams } from 'react-router-dom';

// const CourseDetail: React.FC = () => {
//     // Get the course ID from the URL params
//     const { courseId } = useParams<{ courseId: string }>();

//     // Fetch course details using the courseId
//     // You can make an API request here to get more details about the course.

//     return (
//         <div>
//             <h1>Course Detail</h1>
//             <p>Course ID: {courseId}</p>
//             {/* Display more course details here */}
//         </div>
//     );
// };

// export default CourseDetail;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CourseDetail: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    // Get the course ID from the URL params
    const { courseId } = useParams<{ courseId: string }>();

    // State to store the course details
    const [courseDetails, setCourseDetails] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [enrolled, setEnrolled] = useState(false);

    useEffect(() => {
        // Fetch course details using the courseId
        async function fetchCourseDetails() {
            try {
                const response = await fetch(`http://localhost:8080/instructors/courses/${courseId}`);
                if (response.ok) {
                    const data = await response.json();
                    setCourseDetails(data);
                } else {
                    console.error('Failed to fetch course details from the API');
                }
            } catch (error) {
                console.error('Error while fetching course details:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchCourseDetails();
    }, [courseId]);

    const handleEnroll = async () => {
        try {
            // Replace 'userId' with the actual user ID you want to use for enrollment.
            const userId = user.userData._id; // Replace with the actual user ID.
            
            const response = await fetch('http://localhost:8080/instructors/enrollments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, courseId }),
            });

            if (response.ok) {
                console.log("sunccusfully enrolled");
                navigate('/enrolled_list')
                setEnrolled(true);
            } else {
                console.error('Failed to enroll in the course');
            }
        } catch (error) {
            console.error('Error while enrolling in the course:', error);
        }
    };
    return (
        <div>
            <h1>Course Detail</h1>
            {loading ? (
                <p>Loading course details...</p>
            ) : (
                <div>
                    <p>Course ID: {courseId}</p>
                    {/* Display more course details here */}
                    <p>Course Title: {courseDetails.title}</p>
                    <p>Course Price: ₹{courseDetails.price}.00</p>
                    {/* Add more course details as needed */}
                    <button type='submit' onClick={handleEnroll}>Enroll Now</button>
                </div>
            )}
        </div>
    );
};

export default CourseDetail;
