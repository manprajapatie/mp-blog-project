import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromFavorites } from '../features/recipes/recipeSlice'
import { Link } from 'react-router-dom'
import { recipes } from '../constants/recipes'


const Favorites = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.recipes.favorites)
    const allRecipes = useSelector(state => state.recipes.all)

    const favoriteRecipes = allRecipes.filter(recipe => favorites.includes(recipe.id))

    const handleRemove = (id) => {
        dispatch(removeFromFavorites(id))
    }


    return (
        <>
            <div className='relative justify-center max-w-full w-full h-50 flex bg-primary-800 rounded-bl-4xl rounded-br-4xl'>
                <h1 className='mt-auto text-4xl font-bold m-6 text-Secondary-500 font-Lora'>My Favorite Recipes</h1>
            </div>

            <div className='max-w-4xl mx-auto px-4 py-8'>


                {favoriteRecipes.length === 0 ? (
                    <p className="text-center text-gray-600 mb-60">You haven't added any favorites yet.</p>
                ) : (<div className="grid grid-cols-1 gap-2 shadow-2xl  ">
                    {favoriteRecipes.map((recipe) => (
                        <div key={recipe.id} className="rounded-lg p-5 shadow bg-white flex place-content-around overflow-hidden">


                            <div className='rounded-full overflow-hidden object-contain h-30 w-30 '>
                                <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover rounded mb-4" />
                            </div>
                            <div className='place-content-center'>

                                <h3 className="text-3xl font-semibold mb-2 place-content-center cursor-default">{recipe.name}</h3>
                                <p className="text-gray-600 mb-2 cursor-default">{recipe.cuisine} - {recipe.difficulty}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => handleRemove(recipe.id)}
                                    className="bg-primary-400 text-white px-4 py-2 rounded hover:bg-primary-800 h-10 place-content-center m-1 cursor-pointer"
                                >
                                    Remove
                                </button>
                                <Link
                                    to={`/RecipeDetails/${recipe.id}`}
                                    className="bg-Secondary-500 text-primary-400 border border-solid border-primary-400 px-4 py-2 rounded hover:bg-primary-400 hover:text-Secondary-500 h-10 m-1"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>)
                }
            </div>
        </>
    )
}

export default Favorites
