// // AuthService.ts


// import axios from 'axios';

// export const AuthService = {
//   // Function to set the token in local storage
//   setToken: (newToken: string) => {
//     localStorage.setItem('token', newToken);
//   },

//   // Function to get the token from local storage
//   getToken: () => {
//     return localStorage.getItem('token');
//   },

//   // Function to remove the token from local storage
//   removeToken: () => {
//     localStorage.removeItem('token');
//   },

//   async login(username: any, password: any) {
//     try {
//       const response = await axios.post('http://localhost:8080/users/login', {
//         username,
//         password,
//       });
//       console.log("entered authservice login",response.data.token)

//       if (response.status === 200) {
//         const newToken = response.data.token;
//         AuthService.setToken(newToken); // Store the token in local storage
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert("incorrect username and password");
//       throw error;
//     }
//   },

//   async fetchProfile() {
//     const token = AuthService.getToken();

//     if (!token) {
//       throw new Error('Token not found');
//     }

//     try {
//       const response = await axios.get('http://localhost:8080/users/api/profile', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         return response.data;
//       }
//     } catch (error) {
//       console.error('Profile fetch error:', error);
//       throw error;
//     }
//   },
// };



// import axios from 'axios';

// export const UserService = {
//   // Function to set the token in local storage
//   setToken: (newToken: string) => {
//     localStorage.setItem('token', newToken);
//   },

//   // Function to get the token from local storage
//   getToken: () => {
//     return localStorage.getItem('token');
//   },

//   // Function to remove the token from local storage
//   removeToken: () => {
//     localStorage.removeItem('token');
//   },

//   async login(username: string, password: string, userType: string) {
//     try {
//       const response = await axios.post(`http://localhost:8080/${userType}/login`, {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         const newToken = response.data.token;
//         UserService.setToken(newToken); // Store the token in local storage
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('Incorrect username and password');
//       throw error;
//     }
//   },
  

//   async fetchProfile(userType: string) {
//     const token = UserService.getToken();

//     if (!token) {
//       throw new Error('Token not found');
//     }

//     try {
//       const response = await axios.get(`http://localhost:8080/${userType}/api/profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         return response.data;
//       }
//     } catch (error) {
//       console.error('Profile fetch error:', error);
//       throw error;
//     }
//   },
//   async fetchProfile(userType: string) {
//     const token = UserService.getToken();

//     if (!token) {
//       throw new Error('Token not found');
//     }
//     console.log('Auth Service Token:', token); 
//     try {
//       const response = await axios.get(`http://localhost:8080/${userType}/api/profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         return response.data;
//       } else if (response.status === 401) {
//         UserService.removeToken(); // Remove the token if it's invalid
//         throw new Error('Unauthorized');
//       }
//     } catch (error) {
//       console.error('Profile fetch error:', error);
//       throw error;
//     }
//   },
  
  
  
// };


import axios from 'axios';

export const UserService = {
  // Function to set the token in local storage
  setUserToken:  (newToken:any) => {
    localStorage.setItem('userToken', newToken);
  },
  setAdminToken: (newToken: any) => {
    localStorage.setItem('adminToken', newToken);
  },
  // Function to get the user token from local storage
  getUserToken: () => {
    return localStorage.getItem('userToken');
  },

  // Function to get the admin token from local storage
  getAdminToken: () => {
    return localStorage.getItem('adminToken');
  },

  // Function to remove the user token from local storage
  removeUserToken: () => {
    localStorage.removeItem('userToken');
  },

  // Function to remove the admin token from local storage
  removeAdminToken: () => {
    localStorage.removeItem('adminToken');
  },

  async login(username: string, password: string) {
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const newToken = response.data.token;
        UserService.setUserToken(newToken); // Store the token in local storage
      }
    } catch (error) {
      console.error('User login error:', error);
      alert('Incorrect username and password');
      throw error;
    }
  },

  async loginAdmin(username: string, password: string) {
    try {
      const response = await axios.post('http://localhost:8080/instructors/login', {
        username,
        password,
      });
      console.log('Admin login response:', response);
      if (response.status === 200) {
        const newToken = response.data.token;
        console.log("Admin token:",newToken)
        UserService.setAdminToken(newToken); // Store the token in local storage
      }
    } catch (error) {
      console.error('Admin login error:', error);
      alert('Incorrect username and password');
      throw error;
    }
  },

  async fetchUserProfile() {
    const token = UserService.getUserToken();

    if (!token) {
      throw new Error('User token not found');
    }

    try {
      const response = await axios.get('http://localhost:8080/users/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        UserService.removeUserToken(); // Remove the token if it's invalid
        throw new Error('Unauthorized');
      }
    } catch (error) {
      console.error('User profile fetch error:', error);
      throw error;
    }
  },

  async fetchAdminProfile() {
    const token = UserService.getAdminToken();
    console.log("Auth service admin fetch:",token)
    if (!token) {
      throw new Error('Admin token not found');
    }

    try {
      const response = await axios.get('http://localhost:8080/instructors/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        // UserService.removeAdminToken(); // Remove the token if it's invalid
        throw new Error('Unauthorized');
      }
    } catch (error) {
      console.error('Another profile fetch error:', error);
      throw error;
    }
  },
};
