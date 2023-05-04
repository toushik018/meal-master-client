import React, { useEffect, useState } from 'react';
import { SlHeart } from "react-icons/sl";
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart } from 'react-icons/fa';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const ChefRecipe = () => {
    const data = useLoaderData();
    const [recipeData, setRecipeData] = useState([]);
    console.log(data.name);
    const [favoriteRecipeId, setFavoriteRecipeId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setRecipeData(data.recipes);
        console.log(data);

        const favoriteRecipe = localStorage.getItem('favoriteRecipe');
        if (favoriteRecipe) {
            setFavoriteRecipeId(parseInt(favoriteRecipe));
        }

        setIsLoading(false);
    }, [data]);

    const handleLikeClick = (recipeId) => {
        setFavoriteRecipeId(recipeId);
        toast.success(`${recipeData.find(recipe => recipe.id === recipeId).name} is now my favorite recipe!`);
        localStorage.setItem('favoriteRecipe', recipeId);
    };

    const isFavorite = (recipeId) => {
        return recipeId === favoriteRecipeId;
    };

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <ClipLoader color={'#123abc'} loading={isLoading} css={override} size={150} />
                </div>
            ) : (
                <div>
                    <div className="relative h-96 container mt-10">
                        <img src={data.picture} alt="" className="h-full w-full object-cover blur-sm" />
                        <div className="absolute bottom-0 left-0 right-0 py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-75">
                            <div className="sm:flex sm:justify-between sm:items-center">
                                <div className="flex items-center space-x-4">
                                    <img className="h-40 w-40 mr-2 object-cover object-center rounded-full ring-4 ring-orange-400" src={data.picture} alt="" />
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-4">{data.name}</h2>
                                        <p className="text-lg font-medium text-gray-400">{data.description}</p>
                                        <div className="flex items-center space-x-2 mt-2 mb-2">
                                            <FaHeart size={25} className="text-red-500" />
                                            <p className="text-white text-lg">{data.likes} likes</p>
                                        </div>
                                        <p className="text-white text-lg">{data.NumberOfRecipes} recipes | {data.experience} years of experience</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 container mb-12 mt-12">
                        {recipeData.map((recipe) => (<div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" key={recipe.id}>
                                <h3>  </h3>
                                <img src={recipe.image} className="object-cover object-center h-48 w-full" alt="Recipe image" />
                                <div className="p-4 flex-grow">
                                    <h5 className="text-gray-900 font-bold text-xl mb-2">{recipe.name}</h5>
                                    <ul className="list-disc list-inside mb-4">
                                        {recipe.ingredients.slice(0, 5).map((ingredient) => (
                                            <li className="text-gray-700 text-base" key={ingredient}>{ingredient}</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-700 text-base">{recipe.cookingMethod}</p>
                                </div>
                                <div className="p-8 mt-auto">
                                    <div className="flex items-center">
                                        <span className="text-gray-900 font-bold">{recipe.rating}</span>
                                        <span className="ml-2 text-gray-600">Rating</span>
                                        <span className="flex-grow"></span>
                                        {isFavorite(recipe.id) ?
                                            <span className="text-red-600 cursor-not-allowed" disabled>
                                                <SlHeart size={30} />
                                            </span>
                                            :
                                            <span
                                                className="text-gray-600 cursor-pointer transition-transform transform hover:scale-110"
                                                onClick={() => handleLikeClick(recipe.id)}
                                            >
                                                <SlHeart size={30} />
                                            </span>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
export default ChefRecipe;
                           
