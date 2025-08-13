import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, removeFromFavorites } from '../features/recipes/recipeSlice'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDebounce } from '../utils/useDebounce'
import Pagination from '../components/layout/Pagination'
import { Star } from 'lucide-react';

const AllRecipes = () => {

  const allRecipes = useSelector((state) => state.recipes.all)
  const favorites = useSelector((state) => state.recipes.favorites)
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('')
  const useDebounceData = useDebounce(searchTerm, 300)
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes)

  // Pagination
  //CurrentPage
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  const recipesToShow = useDebounceData.trim() ? filteredRecipes : allRecipes


  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      dispatch(removeFromFavorites(id))
    }
    else { dispatch(addToFavorites(id)) }
  }

  useEffect(() => {
    // const lowerSearch = useDebounceData.toLowerCase();
    // const filtered = allRecipes.filter((recipe) =>
    //   recipe.name.toLowerCase().includes(lowerSearch) ||
    //   recipe.tags?.some((tag) => tag.toLowerCase().includes(lowerSearch)) ||
    //   recipe.mealType?.some((type) => type.toLowerCase().includes(lowerSearch))
    // );
    // setFilteredRecipes(filtered);
    // setCurrentPage(1)

    const search = useDebounceData.toLowerCase().trim();
    if (!search) {
      // No search term,    show all recipes
      setFilteredRecipes(allRecipes);
      setCurrentPage(1);
      return; // Exit, no filtering
    }
    const filtered = allRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search) ||
      recipe.tags?.some((tag) => tag.toLowerCase().includes(search)) ||
      recipe.mealType?.some((type) => type.toLowerCase().includes(search))
    );

    setFilteredRecipes(filtered);
    setCurrentPage(1);
  }, [useDebounceData, allRecipes]
  );

  // Pagination logic
  const indexOfLast = currentPage * recipesPerPage; //total number of card (all)
  const indexOfFirst = indexOfLast - recipesPerPage;
  const currentRecipes = recipesToShow.slice(indexOfFirst, indexOfLast);  //provide current page items index

  //total Page
  const totalPages = Math.ceil(recipesToShow.length / recipesPerPage); //how many pages are there

  return (
    <>
      <div className='relative justify-center max-w-full w-full h-50 flex bg-primary-800 rounded-bl-4xl rounded-br-4xl'>
        <h1 className='mt-auto text-4xl font-bold m-6 text-Secondary-500 font-Lora'>Our All Recipes</h1>
      </div>


      <main className="max-w-6xl mx-auto px-4 py-8">

        {/* Search input for Home page */}
        <input
          type="text"
          placeholder="Search by name, tags or meal type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6 px-4 py-2 w-full border rounded-md shadow-sm"
        />



        {/* recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.length > 0 ? (
            currentRecipes.map((recipe) => (
              <div key={recipe.id} className="border border-gray-200 rounded-xl p-5 shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{recipe.name}</h3>
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

                <div className='flex flex-wrap gap-2 mb-5 justify-between'>


                  <button
                    onClick={() => toggleFavorite(recipe.id)}
                    className={`mt-1 w-2sm py-2 px-4 rounded-xl font-medium text-lg transition duration-300 ease-in-out
                 bg-primary-800 text-white cursor-pointer hover:bg-primary-400 shadow-md`}
                  >
                    {favorites.includes(recipe.id)
                      ? <div className='flex '> <Star  size={26} className='mr-1 text-Secondary-300'/> Fav </div>
                      : <div className='flex '> <Star color="white" size={26} className='mr-1'/> Fav </div>
                    }
                  </button>


                  {/* //Navigate to detail of recipe */}
                  <Link
                    to={`/RecipeDetails/${recipe.id}`}
                    className="mt-1 w-2sm py-2 px-4 rounded-xl font-medium text-lg transition duration-300 ease-in-out border border-solid text-primary-400 border-primary-400 hover:bg-primary-400 hover:text-Secondary-500"
                  >
                    View Recipe
                  </Link>
                </div>

              </div>
            ))) : (
            <p className="text-center col-span-full">No recisssssssssssssssssssssspes found.</p>
          )
          }

        </div>
        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </main>


    </>
  )
}

export default AllRecipes
