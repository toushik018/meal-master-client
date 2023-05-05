import React from 'react';
import banner from '../../assets/banner.jpg';
import Cards from '../cards/Cards';
import Banner from '../banner/Banner';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content w-full lg:w-4/5 flex-col lg:flex-row-reverse items-center">
                    <img src={banner} className="w-full h-auto rounded-lg shadow-2xl lg:w-1/2 lg:mr-0 mb-8 lg:mb-0 sm:mr-0" alt="Meal Master Banner" />
                    <div className="text-center lg:text-left">
                        <p className="uppercase tracking-loose w-full text-gray-800">
                            Discover Delicious Recipes
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Master your meals with <span className='text-orange-400'>Meal Master</span></h1>
                        <p className="text-base md:text-lg lg:text-xl mb-6">Meal Master is a website that provides users with access to a variety of healthy and delicious food recipes to help them become better home cooks.</p>
                        <button className="button mx-auto md:mx-0">Order Now</button>
                    </div>
                </div>
            </div>
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;
