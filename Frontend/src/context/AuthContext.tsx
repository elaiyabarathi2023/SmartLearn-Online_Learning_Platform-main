// //AuthContext.tsx
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { AuthService } from '../services/AuthService';

// // Create an AuthContext
// // const AuthContext = createContext({});
// // Define the type for the AuthContext

// interface AuthContextType {
//   user: any | null; // Replace YourUserType with your actual user data type
//   login: (username: string, password: string) => Promise<void>;
//   logout: () => void;
//   loading: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);




// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check if the user is already authenticated on component mount
//     const token = AuthService.getToken();
//     if (token) {
//       AuthService.fetchProfile()
//         .then((userData) => {
//           setUser(userData);
//         })
//         .catch((error) => {
//           console.error('Error fetching user profile:', error);
//           setUser(null);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   // Function to log in
//   const login = async (username:any, password:any) => {
//     try {
//       await AuthService.login(username, password);
//       const userData = await AuthService.fetchProfile();
//       setUser(userData);
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     }
//   };

//   // Function to log out
//   const logout = () => {
//     AuthService.removeToken();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // export const useAuth = () => {
// //   return useContext(AuthContext);
// // };
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };




// AuthContext.tsx
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { UserService } from '../services/AuthService';
// // import { AdminService } from '../services/AdminService';

// interface AuthContextType {
//   user: any | null; // Replace YourUserType with your actual user data type
//   admin: any | null; // Replace YourAdminType with your actual admin data type
//   login: (username: string, password: string) => Promise<void>;
//   adminLogin:(username: string, password: string) => Promise<void>;
//   logout: () => void;
//   loading: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState(null);
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const userToken = AuthService.getToken();
//     const adminToken = AdminService.getToken();

//     if (userToken) {
//       AuthService.fetchProfile()
//         .then((userData) => {
//           setUser(userData);
//         })
//         .catch((error) => {
//           console.error('Error fetching user profile:', error);
//           setUser(null);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     } else if (adminToken) {
//       AdminService.fetchAdminProfile()
//         .then((adminData) => {
//           setAdmin(adminData);
//         })
//         .catch((error) => {
//           console.error('Error fetching admin profile:', error);
//           setAdmin(null);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const login = async (username: any, password: any) => {
//     try {
//       await AuthService.login(username, password);
//       const userData = await AuthService.fetchProfile();
//       setUser(userData);
//       localStorage.setItem('userToken', userData.token);
//     } catch (error) {
//       console.error('User login error:', error);
//       throw error;
//     }
//   };

//   const adminLogin = async (username: any, password: any) => {
//     try {
//       await AdminService.Adminlogin(username, password);
//       const adminData = await AdminService.fetchAdminProfile();
//       setAdmin(adminData);
//       localStorage.setItem('adminToken', adminData.token);
//     } catch (error) {
//       console.error('Admin login error:', error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     AuthService.removeToken();
//     AdminService.removeToken();
//     localStorage.removeItem('userToken');
//     localStorage.removeItem('adminToken');
//     setUser(null);
//     setAdmin(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, admin, login, adminLogin, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };



// AuthContext.tsx
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { UserService } from '../services/AuthService'; // Updated import for the combined service

// interface AuthContextType {
//   user: any | null;
//   admin: any | null;
//   login: (username: string, password: string) => Promise<void>;
//   adminLogin: (username: string, password: string) => Promise<void>;
//   logout: () => void;
//   loading: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState(null);
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const userToken = UserService.getToken();
//     const adminToken = UserService.getToken();

//     if (userToken) {
//       UserService.fetchProfile('users')
//         .then((userData) => {
//           setUser(userData);
//         })
//         .catch((error) => {
//           console.error('Error fetching user profile:', error);
//           UserService.removeToken();
//           setUser(null);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     } else if (adminToken) {
//       UserService.fetchProfile('instructors')
//         .then((adminData) => {
//           setAdmin(adminData);
//         })
//         .catch((error) => {
//           console.error('Error fetching admin profile:', error);
//           UserService.removeToken();
//           setAdmin(null);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, []);
 
  

  // const login = async (username: string, password: string, userType: string) => {
  //   try {
  //     await UserService.login(username, password, userType);
      
  //     if (userType === 'users') {
  //       const userData = await UserService.fetchProfile(userType);
  //       setUser(userData);
  //       localStorage.setItem('userToken', userData.token);
  //     } else if (userType === 'instructors') {
  //       const userData = await UserService.fetchProfile(userType);
  //       setAdmin(userData);
  //       localStorage.setItem('adminToken', userData.token);
  //     }
  //   } catch (error) {
  //     console.error(`${userType} login error:`, error);
  //     throw error;
  //   }
  // };
 
 
  

//   const logout = () => {
//     UserService.removeToken();
//     localStorage.removeItem('userToken');
//     localStorage.removeItem('adminToken');
//     setUser(null);
//     setAdmin(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, admin, login,adminLogin, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };


// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserService } from '../services/AuthService';

interface AuthContextType {
  user: any | null;
  admin: any | null;
  login: (username: string, password: string) => Promise<void>;
  adminLogin: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [admin, setAdmin] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userToken = UserService.getUserToken();
      const adminToken = UserService.getAdminToken();

      if (userToken) {
        try {
          const userData = await UserService.fetchUserProfile();
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user profile:', error);
          UserService.removeUserToken();
        }
      }

      if (adminToken) {
        try {
          const adminData = await UserService.fetchAdminProfile();
          setAdmin(adminData);
        } catch (error) {
          console.error('Error fetching admin profile:', error);
          UserService.removeAdminToken();
        }
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      await UserService.login(username, password);
      const userData = await UserService.fetchUserProfile();
      setUser(userData);
      // localStorage.setItem('userToken', userData.token);
    } catch (error) {
      console.error('User login error:', error);
      throw error;
    }
  };

  const adminLogin = async (username: string, password: string) => {
    try {
      await UserService.loginAdmin(username, password);
      const adminData = await UserService.fetchAdminProfile();
      setAdmin(adminData);
      // localStorage.setItem('adminToken', adminData.token);
    } catch (error) {
      console.error('Admin login error:', error);
      throw error;
    }
  };

  const logout = () => {
    UserService.removeUserToken();
    UserService.removeAdminToken();
    localStorage.removeItem('userToken');
    localStorage.removeItem('adminToken');
    setUser(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ user, admin, login, adminLogin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
