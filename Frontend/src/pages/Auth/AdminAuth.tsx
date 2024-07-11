import "@fortawesome/fontawesome-free/css/all.css";
import '../Auth/auth.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
// import { AuthService } from "../../services/AuthService";

const AdminAuth: React.FC = () => {
  const navigate = useNavigate();

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/instructors/signup', {
        username,
        email,
        password,
      });
      // console.log('Signup successful', response.data);
      // navigate("/home");
      if (response.data.token) {
        // Store the token in localStorage
        // window.localStorage.setItem("token", response.data.token);

        console.log('Signup successful', response.data);
        window.location.reload();
      } else {
        console.error('Token not found in the response');
      }
    } catch (error) {
      console.error('Signup error', error);
    }
  };

  // // Use useEffect to attach event listeners after component rendering
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signUpButton.addEventListener('click', () => {
        container.classList.remove('move-back');
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        container.classList.add('move-back');
      });
    }
  }, []);

  // ==========================================Login========================================================
  // create login login using localstorage token
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  // const auth = useAuth();
  const  { adminLogin }  = useAuth();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'loginUsername') {
      setLoginUsername(value);
    } else if (name === 'loginPassword') {
      setLoginPassword(value);
    }
  };

  //create a function for handle login with loginUsername and loginPassword without token
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    // try {

      e.preventDefault();
      // if (auth) {
        try {
          await adminLogin(loginUsername, loginPassword);
          console.log("successfully logedin Admin",loginUsername);
          // console.log(auth);
          navigate('/dash')
        } catch (error) {
          console.log('Login failed.Admin Please check your credentials.');
        }
  };



  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ marginTop: "3%" }}>
      <div className="authcontainer" id="container">
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={handleSubmit} >
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>

            {/* <input type="text" placeholder="Name" id="name" name="name" value={formData.name}
            onChange={handleChange} required={true}/>

            <input type="email" placeholder="Email" id="email" name="email" value={formData.email}
            onChange={handleChange} required={true}/>

            <input type="password" placeholder="Password" id="password" name="password" value={formData.password}
            onChange={handleChange} required={true}/>

            <button type="submit" onClick={handleSubmit}>Sign Up</button> */}
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>

          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={handleLoginSubmit}>
            <h1>Instructor</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Username" name="loginUsername" value={loginUsername} onChange={handleLoginChange} />
            <input type="password" placeholder="Password" name="loginPassword" value={loginPassword} onChange={handleLoginChange} />
            <a href="#">Forgot your password?</a>
            <button type="submit" >Sign In</button>
          </form>
        </div>


        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn">Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp">Sign Up</button>
        </div>
      </div>
    </div>

  )
}

export default AdminAuth;