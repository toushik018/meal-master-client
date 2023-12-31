import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCards from '../homeCards/HomeCards';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://meal-master-server-toushik018.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setCards(data.chefs)
                console.log(data);
            })
            .catch(error => {
                console.error(error);

            })
    }, [])


    return (
        <div>
            <div className="flex flex-wrap justify-center mb-8">
                <h1 className="text-4xl container mb-4 font-bold pl-4">The Great Chefs</h1>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="card w-full sm:w-96 m-4 shadow-md border-gray-200 border-2 bg-gray-100"
                    >
                        <figure className="mx-auto object-cover object-center h-48 w-full overflow-hidden">
                        
                            <LazyLoadImage 
                             className="object-cover w-full h-full"
                            effect="blur"
                            src={card?.picture} alt={card.name}
                            /> 
                               
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">{card?.name}</h2>
                            <p>{`${card?.experience} years of experience`}</p>
                            <p>{`${card?.NumberOfRecipes} recipes`}</p>
                            <div className="card-actions justify-end items-center">
                                <p>Likes {card.likes}</p>
                                <Link to={`/viewDetails/${card.id}`}>
                                    <button className="button">View Recipe</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <HomeCards></HomeCards>
        </div>

    );
};

export default Cards;