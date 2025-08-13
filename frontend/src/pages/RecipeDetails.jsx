import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  //find item
  const recipe = useSelector((state) =>
    state.recipes.all.find((item) => item.id === parseInt(id))
  )


  //if recipe is not found, navigate to home
  if (!recipe) {
    return (
      <>
     
      
      <div className='relative justify-center max-w-full w-full h-50 flex bg-primary-800 rounded-bl-4xl rounded-br-4xl'>
        <h1 className='mt-auto text-4xl font-bold m-6 text-Secondary-500 font-Lora z-10'></h1>
      </div>
      
        {/* 
        <div className="text-center p-8 h-[20rem]">

          <p className="text-xl ">Recipe not found.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Go Back
          </button>
        </div> */}
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <h1 className="text-9xl font-bold text-Secondary-500 ">404</h1>
            <p className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mt-4">
              Oops! Product Not Found
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 mt-2">
              We can't seem to find the product you're looking for.
            </p>
            <Link
              to="/"
              className="mt-8 inline-block px-6 py-3 text-white font-bold bg-primary-400 rounded-md shadow-md hover:bg-primary-600 transition duration-300"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      </>
    )
  }


  return (
    <>
      <div className='relative justify-center max-w-full w-full h-50 flex bg-primary-800 rounded-bl-4xl rounded-br-4xl'>
        <h1 className='mt-auto text-4xl font-bold m-6 text-Secondary-500 font-Lora z-10'>Recipes Detail</h1>
      </div>
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden p-6 sm:p-8">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6 shadow-md"
          />

          <h1 className="text-4xl font-extrabold text-primary-400 mb-3 leading-tight">
            {recipe.name}
          </h1>

          <p className="text-lg text-gray-600 mb-6 border-b pb-4 border-gray-200">
            <span className="font-semibold text-gray-700">{recipe.cuisine}</span> |{' '}
            <span className="font-semibold text-gray-700">{recipe.mealType.join(', ')}</span> |{' '}
            Difficulty: <span className="font-semibold text-gray-700">{recipe.difficulty}</span>
          </p>

          {/* Recipe Overview Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pb-4 border-b border-gray-200">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-gray-800">Prep Time:</span> {recipe.prepTimeMinutes} mins
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-gray-800">Cook Time:</span> {recipe.cookTimeMinutes} mins
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-gray-800">Servings:</span> {recipe.servings}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-gray-800">Calories:</span> {recipe.caloriesPerServing} kcal
            </p>
          </div>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2 inline-block">
              Ingredients:
            </h2>
            <ul className="list-none list-inside space-y-2 text-gray-700 text-lg">
              {recipe.ingredients.map((item, i) => (
                <li key={i} className="pl-2">
                  <span className="text-green-600 mr-2">•</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2 inline-block">
              Instructions:
            </h2>
            <ol className=" list-none list-inside space-y-3 text-gray-700 text-lg">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="pl-2">
                  <span className="font-semibold text-primary-600 mr-2">{i + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Tags Section  */}
          {recipe.tags && recipe.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-200 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default RecipeDetails
