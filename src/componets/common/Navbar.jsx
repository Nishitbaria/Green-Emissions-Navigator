import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
export default function Navbar() {
  const auth = getAuth();
  const[ok,Setok]=useState(false);
  const[User,SetUser]=useState(null);
  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });

}
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const User=user;
        // ...cobs
        console.log(user)
        
        localStorage.setItem('MYuser', user.uid);
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
    <div>

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://Green Emissions Navigator.com/" class="flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/995/995260.png" class="h-8 mr-3" alt="Green Emissions Navigator Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Green Emissions Navigator</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
          </li>
          <li>
            <Link to="/ECommerceShipmentEstimate" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Shipment(Ecomm)</Link>
          </li>
          <li>
            <Link to="/Flight" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Flight estimate</Link>
          </li>
          <li>
            <Link to="/Freight" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Freight estimate</Link>
          </li>
           
          
   {!ok &&       <li>
            <a href="/Login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>

          </li>
}
     
        
         
          <div>
        		{ok &&	<button onClick={handleLogout}>
                     <h1 className='text-white'>Logout</h1>
                    </button>
}
        		</div>
        </ul>
      </div>
    </div>
  </nav>
  
    </div>
  )
}
