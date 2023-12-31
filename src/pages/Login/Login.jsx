import React, { useContext, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { signIn, popUpGoogle, popUpGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log('location page', location);
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true })
        form.reset();
        toast.success('Login successful!');
      })
      .catch(error => {
        console.log(error);
        setError('Invalid email or password')
        return

      })
  }

  const handleGoogleSignIn = () => {
    popUpGoogle()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGithub = () => {
    popUpGithub()
    .then( result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">Login</h2>

          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded-md">{error}</div>
          )}
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email address
              </label>
              <input className="border border-gray-300 p-2 w-full rounded-md" type="email" id="email" name="email" required />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex">
                <input
                  className="border border-gray-300 p-2 w-full rounded-md"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                />
                <button
                  className="ml-2 focus:outline-none"
                  type="button"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                Login
              </button>
              <Link className="text-gray-600 hover:text-gray-800" to="/register">
                Don't have an account yet? Register
              </Link>
            </div>
          </form>
        </div>
        <div className="divider">OR login with:</div>
        <div className="grid h-32 card bg-gray-100 rounded-lg place-items-center">
          <div className="mt-6">
            <div className="flex items-center justify-center">

              <button onClick={handleGoogleSignIn}
                href="/auth/google"
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center mr-4"
              >
                <FaGoogle size={20} className="mr-2" />
                Google
              </button>


              <button onClick={handleGithub}
                href="/auth/github"
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
              >
                <FaGithub size={20} className="mr-2" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Login;
