import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  //find item
  const recipe = useSelector((state) => {
    state.recipes.all.find((item) => item.id === parseInt(id))
  })


  //if recipe is not found, navigate to home
  if (!recipe) {
    return (
      <div className="text-center p-8">
        <p className="text-xl">Recipe not found.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    )
  }


  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
        <p className="text-gray-600 mb-4">
          {recipe.cuisine} | {recipe.mealType.join(', ')} | Difficulty: {recipe.difficulty}
        </p>

        <div className="mb-4">
          <p>Prep Time: {recipe.prepTimeMinutes} mins</p>
          <p>Cook Time: {recipe.cookTimeMinutes} mins</p>
          <p>Servings: {recipe.servings}</p>
          <p>Calories: {recipe.caloriesPerServing}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Ingredients:</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Instructions:</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}

export default RecipeDetails
