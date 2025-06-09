import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, removeFromFavorites } from '../recipeSlice'

const Home = () => {

  const recipes = useSelector((state) => state.recipes.all)
  const favorites = useSelector((state) => state.recipes.favorites)
  const dispatch = useDispatch()

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      dispatch(removeFromFavorites(id))
    }
    else { dispatch(addToFavorites(id)) }
  }

  return (
    <>
   
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Recipes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="border rounded p-4 shadow-md bg-white dark:bg-gray-800">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cuisine: {recipe.cuisine} | Difficulty: {recipe.difficulty}
              </p>
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`mt-4 px-4 py-2 text-sm rounded ${favorites.includes(recipe.id)
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                  }`}
              >
                {favorites.includes(recipe.id) ? "Remove Favorite" : "Add to Favorite"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* <div className='min-h-screen bg-gray-100 py-10 px-4'>
        <h1 className='text-5xl font-bold mb-8 text-center'>Recipe Blog</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  )
}

export default Home
