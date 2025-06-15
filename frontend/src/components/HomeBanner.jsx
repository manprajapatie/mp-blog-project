import { useRef } from 'react';
import { useState, useEffect } from 'react';


// Banner Component

//recipes recieve from prop
export const Banner = ({ recipes }) => {
    const [current, setCurrent] = useState(0);


    //used to shuffle of all recipes and disply only 4 unique value every reload
    const shuffleRecipes = (arr) => {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    //slice 4 value 
    const selectedRecipes = useRef(
        shuffleRecipes(recipes).slice(0, 4)
    ).current;


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % selectedRecipes.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [selectedRecipes.length]);

    if (selectedRecipes.length === 0) return null;

    //hold the data for return it
    const recipe = selectedRecipes[current];

    return (
        <div className="relative mb-8 overflow-hidden rounded-xl shadow-lg">
            <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-96 object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h2 className="text-3xl font-bold text-white">{recipe.name}</h2>
                <p className="text-sm text-white mt-1">{recipe.cuisine} | {recipe.mealType?.join(', ')}</p>
            </div>
        </div>
    );
};
