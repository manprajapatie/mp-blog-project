import React  from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, removeFromFavorites } from '../recipeSlice'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"

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
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">All Recipes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="border border-gray-200 rounded-xl p-5 shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{recipe.name}</h3>
              <p className="text-base text-gray-600 mb-3">
                <span className="font-medium">Cuisine:</span> {recipe.cuisine} | <span className="font-medium">Difficulty:</span> {recipe.difficulty}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>


              {/* <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`mt-4 w-full py-2 px-4 rounded-lg font-bold text-lg transition duration-300 ease-in-out
                  ${favorites.includes(recipe.id)
                    ? "bg-red-600 text-white hover:bg-red-700 shadow-md"
                    : "bg-green-500 text-white hover:bg-green-600 shadow-md"
                  }`}
              >
                {favorites.includes(recipe.id) ? "Remove Favorite" : "Add to Favorite"}
              </button> */}

              <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`mt-4 w-2sm py-2 px-4 rounded-full font-bold text-lg transition duration-300 ease-in-out
                  ${favorites.includes(recipe.id)
                    ? "bg-red-600 text-white hover:bg-red-700 shadow-md"
                    : "bg-green-500 text-white hover:bg-green-600 shadow-md"
                  }`}
              >
                {favorites.includes(recipe.id)
                    ? "Rem"
                    : "Fav"
                  }
              </button>


              {/* //Navigate to detail of recipe */}
              <Link
                to={`/RecipeDetails/${recipe.id}`}
                className="block text-center mt-4 w-full py-2 px-4 rounded-lg font-bold text-lg transition duration-300 ease-in-out bg-green-500 text-white hover:bg-green-600 shadow-md"
              >
                View Recipe
              </Link>


            </div>
          ))}
        </div>
      </main>


    </>
  )
}

export default Home
