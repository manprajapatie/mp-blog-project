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
                className=' max-w-screen w-full flex items-center py-2 flex-col justify-between'>
                <h1 className='font-Rouge text-4xl sm:text-5xl text-primary-800'>Random Recipes</h1>
                <h2 className='font-Lora text-2xl sm:text-3xl lg:text-5xl py-5 text-center'>Easy to Make,<span className='text-primary-800'> Tasty and healthy Food</span></h2>


                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] mt-5 place-items-center overflow-hidden'>

                    {
                        data.map((recipe) => (
                            <div key={recipe.id}
                                className='group border-2 border-solid border-primary-400 p-4 cursor-pointer 
                                            hover:bg-primary-800 hover:text-Secondary-500 transition-all duration-300 
                                            flex flex-col items-center justify-around gap-4 h-full w-full rounded-xl'
                            >
                                {/* Header Section */}
                                <div className="text-center space-y-1">
                                    <h3 className='z-10 text-base sm:text-lg md:text-xl font-bold leading-tight'>{recipe.name}</h3>
                                    <p className=' text-xs sm:text-sm opacity-80 uppercase '>MealType : {recipe.mealType}</p>
                                </div>
                                
                                {/* Image Section */}
                                <div className='relative w-full aspect-square overflow-hidden border border-solid border-black/10'>
                                    <img
                                        src={recipe.image}
                                        alt={recipe.name}
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110'
                                        loading="lazy"
                                        srcSet={`${recipe.image} 1x`}
                                    // onLoad={(e) => e.target.classList.remove("blur-sm")}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>


                {/* Experice Div */}
                <div
                    className='w-[95%] border border-solid border-black rounded-2xl h-auto m-5 p-5 
                    bg-primary-800 flex justify-center flex-col md:flex-row text-Secondary-500 items-center
                '>
                    {/* Logo */}
                    <div className=''>
                        <img src={logo} alt="MP" className='w-[10rem] md:w-[15rem] pr-2' />
                    </div>

                    {/* Experience Content */}
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-3xl font-bold mb-2 text-center md:text-left'>We Have 5+ Year Of Experience</h1>
                        <p className='text-[1.15rem] text-center md:text-left'>We have total 5 year of experience of cooking meals Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus suscipit quisquam consequatur illo iste doloremque ab, quaerat, minima dolorum architecto qui assumenda perspiciatis ea, quas consectetur? Accusantium ex nam excepturi.</p>
                    </div>


                </div>
            </section>
        </>
    )
}

export default RandomRecipes
