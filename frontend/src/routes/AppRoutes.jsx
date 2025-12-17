import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import RecipeDetails from '../pages/RecipeDetails'
import Favorites from '../pages/Favorites'
import Login from '../pages/Login'
import ProtectedRoute from '../components/layout/protectedRoute'
import NotFound from '../pages/NotFound'
import AllRecipes from '../pages/AllRecipes'
import ScrollToTop from '../components/layout/ScrollToTop'


const AppRoutes = () => {
  return (
    <>
        <ScrollToTop/>
      <Routes>
        <Route path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />

        <Route path='/Login'
          element={
            <Login />
          } />

        <Route path='/Favorites'
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>

          } />

        <Route path='/AllRecipes'
          element={
            <ProtectedRoute>
              <AllRecipes />
            </ProtectedRoute>

          } />


        <Route path='/RecipeDetails/:id'
          element={
            <ProtectedRoute>
              <RecipeDetails />
            </ProtectedRoute>
          } />

          <Route path='*'
          element={
            <ProtectedRoute>
              <NotFound/>
            </ProtectedRoute>
          }
          />

      </Routes>
    </>
  )
}

export default AppRoutes
