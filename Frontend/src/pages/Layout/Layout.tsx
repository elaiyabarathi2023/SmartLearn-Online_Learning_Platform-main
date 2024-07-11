import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../context/AuthContext";
// import { useAuthAdmin } from "../../context/AdminContext";
import { useNavigate } from 'react-router-dom';
const Layout = () => {
    const {user, logout,admin, } = useAuth();
    // const {} = useAuthAdmin();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
      };
    const handleLogoutAdmin = () => {
        logout();
        navigate("/");
      };
    return (
        <>

            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" style={{maxHeight:"60px"}}>
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/home" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="/all_courses" className="nav-item nav-link">Courses</a>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu fade-down m-0">
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div> */}
                        {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                        {user ? (
                            <>
                            <a href="/enrolled_list" className="nav-item nav-link">Enrolled</a>
                            <a href="" onClick={handleLogout} className="nav-item nav-link">Logout</a>
                            </>
                        ) :  (
                            !admin && <a href="/signin" className="nav-item nav-link">Login</a>
                            
                        )}
                        {admin ? (
                            <>
                            <a href="/dash"  className="nav-item nav-link">Dashboard</a>
                            <a href="/students_enrolled_list"  className="nav-item nav-link">Enrolled List</a>
                            <a href="/create_course"  className="nav-item nav-link">New Course</a>
                            <a href="" onClick={handleLogoutAdmin} className="nav-item nav-link">Logout</a>
                            
                            
                            </>
                        ) : (
                            !user && <a href="/admin_signin" className="nav-item nav-link">Instructor | login</a>
                        )}
                        
                    </div>
                    {/* <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></a> */}
                </div>
            </nav>
            <Outlet/>
            {/* <!-- Navbar End --> */}
            

        </>
    )
}

export default Layout;