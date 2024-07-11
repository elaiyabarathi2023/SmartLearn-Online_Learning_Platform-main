
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';


const StudentEnrolledList = () => {
    const { admin } = useAuth();
    const [Enrolls, setEnrolls] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch('http://localhost:8080/instructors/enrolled/by_admin_id');
                if (response.ok) {
                    const data = await response.json();
                    // setCourses(data);
                    // Filter courses where the admin's ID matches the course's admin ID
                    const filteredEnrolls = data.filter((enroll: any) => enroll.courseId.Admin_id === admin?.userData?._id);
                    console.log("Entrolled students list:",filteredEnrolls);
                    setEnrolls(filteredEnrolls);
                } else {
                    console.error('Failed to fetch data from the API');
                }
            } catch (error) {
                console.error('Error while fetching data:', error);
            } 
        }

        fetchCourses();
    }, [admin?.userData?._id]);

    


    return (

       <>
       <div className="container">
               <h1>Enrolled list students</h1>
               {Enrolls.map((enrolls: any) => (
                        <p>Course Title: {enrolls.courseId.title} User : {enrolls.userId.username}</p>
                    
                        ))}
        </div>
       </>
                
    );
}

export default StudentEnrolledList;