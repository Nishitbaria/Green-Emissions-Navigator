import React, { useState,useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth,createUserWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/Dashboard');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  const signInWithGoogle = async () => {
    try {
        // const googleauth=getAuth();
    await signInWithPopup(auth,provider);
    } catch (err){
      console.error(err);
    }
  };
  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
      <section className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Green Emissions Navigator</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email-address" className="block text-gray-600">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button
              onClick={onLogin}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </div>
        </form>
        <button
      onClick={signInWithGoogle}
      className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
    >
      <FaGoogle className="mr-2" size={18} color="#fff" /> Sign in with Google
    </button>
        <p className="text-sm text-gray-600 text-center">
          No account yet?{' '}
          <NavLink to="/signup" className="text-blue-500">
            Sign up
          </NavLink>
        </p>
      </section>
    </main>
  );
};

export default Login;
