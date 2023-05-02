import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-orange-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:flex sm:justify-between">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-lg font-medium text-black mb-2">Meal <span className='text-white'>Master</span></h2>
          <img src={logo} alt='Meal Master' className="h-20" />
        </div>
        <div className="grid grid-cols-3 gap-4 sm:gap-0">
          <div className="text-black">
            <h3 className="text-base font-medium mb-2">Recipes</h3>
            <Link to="/recipes" className="hover:text-gray-100">View all</Link>
          </div>
          <div className="text-black">
            <h3 className="text-base font-medium mb-2">About Us</h3>
            <Link to="/about" className="hover:text-gray-100">Learn more</Link>
          </div>
          <div className="text-black">
            <h3 className="text-base font-medium mb-2">Contact Us</h3>
            <Link to="/contact" className="hover:text-gray-100">Get in touch</Link>
          </div>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <a href="https://www.facebook.com/MealMaster/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-100 mr-4">
            <FaFacebook className="h-6" />
          </a>
          <a href="https://twitter.com/MealMaster/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-100 mr-4">
            <FaTwitter className="h-6" />
          </a>
          <a href="https://www.instagram.com/MealMaster/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-100">
            <FaInstagram className="h-6" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 sm:flex sm:justify-between">
        <div className="flex items-center text-black">
          <AiFillPhone className="h-6 mr-2" />
          <p className="text-sm">123-456-7890</p>
        </div>
        <div className="flex items-center text-black mt-4 sm:mt-0">
          <AiFillMail className="h-6 mr-2" />
          <p className="text-sm">info@meal-master.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
