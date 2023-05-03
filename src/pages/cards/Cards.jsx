import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/chefs')
            .then(res => res.json())
            .then(data => setCards(data.chefs))
            .catch(error => {
            console.error(error);

            })
    }, [])

    console.log(cards.chefs);

    return (
        <div className='flex flex-wrap justify-center mb-8'>
            <h1 className='text-4xl container mb-4 font-semibold'>The Great Chefs</h1>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="card w-full sm:w-96 m-4 shadow-md border-gray-200 border-2 bg-gray-100">
                    <figure className='mx-auto rounded-full w-40 h-40 overflow-hidden mt-8'>
                        <img className=' object-cover w-full h-full' src={card?.image} alt={card.name} /></figure>

                    <div className="card-body">
                        <h2 className="card-title">{card?.name}</h2>
                        <p>{`${card?.experience} years of experience`}</p>
                        <p>{`${card?.recipes} recipes`}</p>
                        <div className="card-actions justify-end items-center">
                            <p>{card.rating}</p>
                         <Link to='/recipe'><button className="button">View Recipe</button> </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Cards;