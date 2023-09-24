import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth,createUserWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

const Signup = () => {
  const navigate = useNavigate();
  
const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/login');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ..
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
        <h1 className="text-2xl font-semibold text-center mb-4">TransportHub</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email-address" className="block text-gray-600">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign up
          </button>

        </form>
        <button onClick={signInWithGoogle}> Signin with google</button>

        <p className="text-center mt-4">
          Already have an account?{' '}
          <NavLink to="/login" className="text-blue-500">
            Sign in
          </NavLink>
        </p>
      </section>
    </main>
  );
};

export default Signup;
