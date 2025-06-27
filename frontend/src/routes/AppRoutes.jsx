import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../features/recipes/pages/Home'
import RecipeDetails from '../features/recipes/pages/RecipeDetails'
import Favorites from '../features/recipes/pages/Favorites'


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
        <Route path='/RecipeDetails/:id' element={<RecipeDetails/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes
