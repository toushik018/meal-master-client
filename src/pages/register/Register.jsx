import React, { useContext, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const auth = getAuth(app);

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);

  const { createUser, user, logOut } = useContext(AuthContext);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    setError(' ')

    if (!validatePassword(password)) {
      setError('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }

    if (password !== confirm_password) {
      setError('Passwords do not match.');
      return;
    }


    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photoURL
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        logOut();
        form.reset();
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          setError('This email has already been registered. Please use a different email address to create your account');
        } else {
          setError(error.message);
        }
      });

    console.log(name, photoURL, email, password, confirm_password);
  }

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  }


  return (
    <div className="flex items-center justify-center min-h-screen mb-8">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">Create an account</h2>

          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email address
              </label>
              <input className="border border-gray-300 p-2 w-full rounded-md" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="photoURL">
                Photo URL
              </label>
              <input className="border border-gray-300 p-2 w-full rounded-md" type="text" id="photoURL" name="photoURL" required />
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
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="confirm_password">
                Confirm Password
              </label>
              <input className="border border-gray-300 p-2 w-full rounded-md" type="password" id="confirm_password" name="confirm_password" required />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button disabled={!accepted} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                Register
              </button>
              <Link to="/login" className="text-gray-600 hover:text-gray-800" >
                Already have an account?
              </Link>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                <input onClick={handleAccepted} className="mr-2 leading-tight" type="checkbox" required />
                <span  className="text-base">
                  I agree to the <Link to='/terms' className="text-blue-500 hover:underline">terms and conditions</Link>.
                </span>
              </label>
            </div>
            <p className=' text-red-700 mt-2 px-4 py-2 mb-4 rounded-md'>{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
