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
            <div className='relative  max-w-full w-full h-40 flex bg-primary-800 rounded-bl-4xl rounded-br-4xl'>
            </div>

            <div className='max-w-6xl mx-auto px-4 py-8'>
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Favorite Recipes</h2>

                {favoriteRecipes.length === 0 ? (
                    <p className="text-center text-gray-600 mb-60">You haven't added any favorites yet.</p>
                ) : (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {favoriteRecipes.map((recipe) => (
                        <div key={recipe.id} className="border rounded-lg p-5 shadow bg-white">
                            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                            <p className="text-gray-600 mb-2">{recipe.cuisine} - {recipe.difficulty}</p>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleRemove(recipe.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                                <Link
                                    to={`/RecipeDetails/${recipe.id}`}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
