import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '/MPlogo.png'

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
                className='border-solid border-2 border-black max-w-screen w-full h-[50rem] flex items-center py-2 flex-col justify-between'>
                <h1 className='font-Rouge text-5xl text-primary-800'>Random Recipes</h1>
                <h2 className='font-Lora text-5xl py-5'>Easy to Make,<span className='text-primary-800'> Tasty and healthy Food</span></h2>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] h-[22rem] mt-5 place-items-center overflow-hidden'>

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


                {/* Experice Div */}
                <div
                    className='w-[95%] border border-solid border-black rounded-2xl h-[10rem] m-5 p-5 
                    bg-primary-800 flex justify-center text-Secondary-500 items-center
                '>
                    {/* Logo */}
                    <div className=''>
                        <img src={logo} alt="MP" className='w-65 pr-2' />
                    </div>

                    {/* Experience Content */}
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-3xl font-bold mb-2'>We Have 5+ Year Of Experience</h1>
                        <p className='text-[1.15rem] '>We have total 5 year of experience of cooking meals Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus suscipit quisquam consequatur illo iste doloremque ab, quaerat, minima dolorum architecto qui assumenda perspiciatis ea, quas consectetur? Accusantium ex nam excepturi.</p>
                    </div>


                </div>
            </section>
        </>
    )
}

export default RandomRecipes
