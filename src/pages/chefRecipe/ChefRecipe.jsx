import React, { useEffect, useState } from 'react';

const ChefRecipe = () => {
    const [recipeData, setRecipeData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recipe')
            .then(res => res.json())
            .then(data => setRecipeData(data.recipes))
            .catch(error => console.error(error))

    }, [])

    return (
        <div>
            {
                recipeData.map((recipe) => (
                    <div key={recipe.id} className='container'>
                        <h1> {recipe.name} </h1>
                        <ul>
                           <li> {recipe.ingredients}</li>
                        </ul>


                    </div>
                ))}
        </div>
    );
};

export default ChefRecipe;
