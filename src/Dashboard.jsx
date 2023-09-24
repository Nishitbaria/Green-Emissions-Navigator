import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";


import React from 'react';
// Import your Firebase authentication context or hook here

const Dashboard = () => {
    const auth = getAuth();
    const[ok,Setok]=useState(false);
    const[User,SetUser]=useState(null);
  
    // const user = auth.currentUser;
  // Get user information from your authentication context
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          const User=user;
          // ...cobs
          console.log(user)
          SetUser(user);
          Setok(user);
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          Setok(false);
          console.log("user is logged out")
        }
      });
     
}, [])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
   {ok && (<> <div className="w-1/5 bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold mb-4">Dashboard </h1>
        <ul>
          <li className="mb-2">
            <a href="#" className="block hover:text-blue-300">
              Dashboard Item 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-blue-300">
              Dashboard Item 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-blue-300">
              Dashboard Item 3
            </a>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Welcome,{User.email}!</h2>
          {/* You can display the user's name or other information here */}
        </div>

        {/* User-specific content */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          {/* Display user-specific data or components */}
          {/* Example: <UserProfile /> */}
        </div>
      </div></> 
   )
}
    </div>
  );
};
export default Dashboard;

