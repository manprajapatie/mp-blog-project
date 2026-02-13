import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, removeFromFavorites } from '../features/recipes/recipeSlice'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDebounce } from '../utils/useDebounce'
import Pagination from '../components/layout/Pagination'
import NotFound from './NotFound'
import { Star, Search, X } from 'lucide-react';
import RecipeSkeleton from '../components/skeletons/RecipeSkeletons'

const AllRecipes = () => {

  const allRecipes = useSelector((state) => state.recipes.all)
  const favorites = useSelector((state) => state.recipes.favorites)
  const isLoading = useSelector((state) => state.recipes.isLoading)
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('')
  const useDebounceData = useDebounce(searchTerm, 300)
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes)

  // Pagination
  //CurrentPage
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  const recipesToShow = useDebounceData.trim() ? filteredRecipes : allRecipes


  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      dispatch(removeFromFavorites(id))
    }
    else { dispatch(addToFavorites(id)) }
  }

  useEffect(() => {

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
      <div className='relative justify-center max-w-full w-full h-25 flex bg-primary-800 rounded-bl-4xl rounded-br-4xl'>
        <h1 className='mt-auto text-3xl md:text-4xl font-bold m-6 text-Secondary-500 font-Lora'>Our All Recipes</h1>
      </div>


      <main className="max-w-6xl mx-auto px-4 py-8">

        {/* Search input for Home page */}

        <div className="relative max-w-2xl mx-auto mb-5 md:mb-12">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>

          <input
            type="text"
            placeholder="Search by name, tags or meal type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-12 pr-12 py-3 md:py-4 bg-white border border-gray-300 rounded-2xl 
                    text-gray-900 placeholder-gray-400
                    shadow-sm transition-all duration-300
                    hover:shadow-md
                    focus:ring-4 focus:ring-primary-400/20 focus:border-primary-400 focus:outline-none"
          />
          {/* empty search button, only appear when there are any text */}
          {
            searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary-600 transition-colors'>
                <X className="h-5 w-5" />
              </button>
            )
          }
        </div>


        {/* recipe Cards */}
        {isLoading ? (
          // ------------------ LOADING STATE

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Array.from create empty array that is filled, _dont care about the value, index loop with given number*/}
            {Array.from({ length: recipesPerPage }).map((_, index) => (
              <RecipeSkeleton key={index} />
            ))}
          </div>
        ) :
          filteredRecipes.length > 0 || isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4">
              {currentRecipes.map((recipe) => (
                <div key={recipe.id}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">

                  {/* ---------image  Section*/}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    {/* add link to image also */}
                    <Link
                      to={`/RecipeDetails/${recipe.id}`}
                      className="relative block overflow-hidden aspect-[4/3] cursor-pointer">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-48 xs:h-90 sm:h-48 object-cover rounded-lg mb-4 shadow-sm"
                      /></Link>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-700 uppercase tracking-wider shadow-sm">
                      {recipe.difficulty}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-grow cursor-default">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-primary-600 transition-colors">
                      {recipe.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mb-4 italic">
                      {recipe.cuisine} Cuisine
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {recipe.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="md:text-[8px] text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-gray-50 text-gray-400 border border-gray-200 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    {/* This pushe footer to the bottom */}
                    <div className="flex-grow"></div>

                    {/* Fav and view recipe */}
                    <div className='flex items-center gap-3 pt-4 border-t border-gray-50'>
                      <button
                        onClick={() => toggleFavorite(recipe.id)}
                        className={`flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 ${favorites.includes(recipe.id)
                          ? "bg-red-50 text-red-500"
                          : "bg-gray-50 text-gray-400 hover:bg-gray-200"
                          }`}
                      >
                        <Star
                          size={22}
                          fill={favorites.includes(recipe.id) ? "currentColor" : "none"}
                        />
                      </button>


                      {/* //Navigate to detail of recipe */}
                      <Link
                        to={`/RecipeDetails/${recipe.id}`}
                        className="flex-1 text-center py-2.5 px-4 rounded-xl font-semibold md:text-[0.8rem] lg:text-sm bg-primary-800 text-white hover:bg-primary-900 transition-all duration-300 shadow-sm active:scale-95">
                        View Recipe
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NotFound />
          )
        }


        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </main >


    </>
  )
}

export default AllRecipes
