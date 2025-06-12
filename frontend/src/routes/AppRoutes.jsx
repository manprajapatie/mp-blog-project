import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../features/recipes/pages/Home'
import RecipeDetails from '../features/recipes/pages/RecipeDetails'


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/RecipeDetails/:id' element={<RecipeDetails/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes
