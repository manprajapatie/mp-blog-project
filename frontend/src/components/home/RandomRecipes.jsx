import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const RandomRecipes = () => {

    const [data, setData] = useState([])

    const RandomRecipes = useSelector((state) =>
        state.recipes.all ?? []
    )

    useEffect(
        () => {
            if (RandomRecipes.length >= 4) {
                const shuffled = [...RandomRecipes]
                for (let i = shuffled.length - 1; i > 0; i--) {

                    let r = Math.floor(Math.random() * (i + 1))

                    // [shuffled[i], shuffled[r]] = [shuffled[r], shuffled[i]];
                }
                // Take first 4 items
                const randomFour = shuffled.slice(0, 4);
                setData(randomFour);
            }
        }, [RandomRecipes]
    )

    return (
        <>
            <section
                className='border-solid border-2 border-black max-w-screen w-full h-screen flex items-center py-2 flex-col'>
                <h1 className='font-Rouge text-5xl text-primary-800'>Random Recipes</h1>
                <h2 className='font-Lora text-5xl py-5'>Easy to Make,<span className='text-primary-800'> Tasty and healthy Food</span></h2>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] h-[22rem] mt-5 place-items-center '>

                    {
                        data.map((recipe) => (
                            <div key={recipe.id}
                                className='border border-solid border-Secondary-100 p-2 cursor-pointer hover:bg-primary-800 hover:text-Secondary-500 transition-all duration-500 flex
                                flex-col items-center justify-between h-full w-full'
                            >
                                <h3 className='z-10 text-xl font-bold text-center'>{recipe.name}</h3>
                                <p className=''>MealType : {recipe.mealType}</p>
                                <div className='w-[90%] h-[78%] m-3 border border-solid border-black'>
                                <img src={recipe.image} alt={recipe.name} className='w-full h-full object-cover' />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
        </>
    )
}

export default RandomRecipes
