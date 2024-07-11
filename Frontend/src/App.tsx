import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Auth from './pages/Auth/UserAuth';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Index from './pages/Home/Index';
import AdminAuth from './pages/Auth/AdminAuth';
import Dash from './pages/Instructors/dash';
import VideoPlayer from './pages/Courses/video';
import CoursesAll from './pages/Courses/coursesAll';
import CreateCourse from './pages/Courses/createCourse';
import { useAuth } from './context/AuthContext';
// import { useAuthAdmin } from './context/AdminContext';
import CourseDetail from './pages/Courses/courseDetail';
import EnrolledCourse from './pages/Courses/EnrolledList';
import StudentEnrolledList from './pages/Instructors/StudentsEnrolledList';
function App() {
  const { user, admin } = useAuth();
  // const navigate = useNavigate();
  // const home = navigate('/admin_signin')
  // const {admin} = useAuthAdmin();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={<Home />} />
            <Route path="index" element={<Index />} />
            <Route path="signin" element={<Auth />} />
            <Route path="admin_signin" element={<AdminAuth />} />
            <Route path="dash" element={<Dash />} />
            <Route path="video" element={<VideoPlayer />} />
            <Route path="all_courses" element={<CoursesAll />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="enrolled_list" element={<EnrolledCourse />} />
            <Route path="students_enrolled_list" element={<StudentEnrolledList />} />
            {/* <Route path="create_course" element={<CreateCourse />} /> */}

            {/* Private Routes */}
            <Route path="create_course" element={admin ? <CreateCourse /> : null}/>
            {/* {admin ? (
            <>
              <Route path="create_course" element={<CreateCourse />} />
              
            </>
          ) : (
            <>
             <Route path="create_course" element={() => navigate('/admin_signin')} />
            </>
          )} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;