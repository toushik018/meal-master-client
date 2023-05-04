import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

const cards = [
    {
        title: "Healthy Recipes",
        description:
            "Healthy recipes refer to dishes that are prepared using nutritious ingredients and methods that promote good health. These recipes typically include a variety of whole grains, lean proteins, fruits, and vegetables",
        icon: <AiOutlineHeart />,
        link: "/recipes",
        color: "bg-pink-200",
    },
    {
        title: "Quick and Easy Meals",
        description:
            "Quick and easy meals refer to dishes that can be prepared and cooked in a short amount of time with minimal effort. These meals often involve simple ingredients and straightforward cooking techniques.",
        icon: <BsClockHistory />,
        link: "/recipes",
        color: "bg-blue-200",
    },
    {
        title: "Desserts Galore",
        description:
            "Desserts Galore is a website dedicated to providing delicious and unique dessert recipes. From cakes and pies to cookies and candies, our recipes are carefully curated and tested to ensure they are easy to follow and yield amazing results",
        icon: <AiOutlineHeart />,
        link: "/recipes",
        color: "bg-orange-200",
    },
];

const HomeCards = () => {
    return (

        <div>
                <div className="bg-gray-100 py-8 container rounded-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-gray-900">Quick, Best, Healthy</h2>
                        <p className="mt-2 text-lg text-gray-600">30-Minute Healthy and Delicious Indian Recipes <span className="text-gray-950">
                        Quick and Easy Meals for Your Busy Lifestyle</span></p>
                    </div>
                </div>

        
        <div className="flex flex-wrap justify-center mb-14 ">
            
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`relative bg-white rounded-md shadow-xl m-4 p-6 w-72 sm:w-80 lg:w-96 transform hover:-translate-y-1 hover:shadow-2xl duration-300 ${card.color}`}
                >
                    <div className="flex items-center mb-6">
                        <div className="rounded-full bg-white p-2 text-red-700">{card.icon}</div>
                        <h3 className="text-2xl font-bold ml-4">{card.title}</h3>
                    </div>
                    <p className="text-gray-900 mb-6">{card.description}</p>
                    <a
                        href='#'
                        className="text-gray-700 font-semibold flex items-center"
                    >
                        View Recipes
                        <FiChevronRight className="ml-2" />
                    </a>
                </div>
                
            ))}
        </div>
        </div>
    );
};

export default HomeCards;
