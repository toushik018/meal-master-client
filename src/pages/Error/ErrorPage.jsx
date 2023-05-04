import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/36395-lonely-404.json'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const {error, status} = useRouteError();
  console.log(error.message);
  console.log(status);
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row container mx-auto'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0 text-center'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            {error.message}
            
          </h2>
          <Link to='/' className='btn mt-4'>
            Go to Home Page
          </Link>
          
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Error;