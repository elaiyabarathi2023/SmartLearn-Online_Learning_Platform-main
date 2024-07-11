import React from 'react';
import { useAuth } from '../../context/AuthContext';

function Homepage() {
    const { user, login, logout, loading } = useAuth();
    console.log(user);

  return (
    
    <div>
    <h2>Welcome to the Homepage</h2>
    {user ? (
      <p>Welcome, {user.userData.username}!</p>
    ) : (
      <p>Please log in to see your profile.</p>
    )}
  </div>
);
}

export default Homepage;

// import React, { useEffect, useState } from 'react';
// import { AuthService } from '../../services/AuthService';


// function Homepage() {
//   const [userProfile, setUserProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getCurrentUser() {
//       try {
//         const profileData = await AuthService.fetchProfile();

//         setUserProfile(profileData);
//         setLoading(false);
//       } catch (error) {
//         // setError(error);
//         setLoading(false);
//       }
//     }

//     getCurrentUser();
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to the Homepage</h2>
//       {loading ? (
//         <p>Loading user profile...</p>
//       ) : error ? (
//         <p>Error fetching user profile: {error}</p>
//       ) : userProfile ? (
//         <div>
//           <h3>User Profile:</h3>
//           <pre>{JSON.stringify(userProfile, null, 2)}</pre>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default Homepage;

