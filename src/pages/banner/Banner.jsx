import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat mb-20" style={{ backgroundImage: "url('https://i.ibb.co/brCvGpC/india-gddd9480b1-1920.jpg')" }}>
            <div className="absolute inset-0 bg-orange-400 opacity-50"></div>
            <div className="relative container px-4 py-32 mx-auto z-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-extrabold font-serif text-white mb-6">Delicious Recipes</h1>
                    <p className="text-2xl font-medium text-white mb-12">Find the perfect recipe to satisfy your cravings</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;
