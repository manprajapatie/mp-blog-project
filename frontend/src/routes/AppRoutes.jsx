import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../features/recipes/pages/Home'
import RecipeDetails from '../features/recipes/pages/RecipeDetails'
import Favorites from '../features/recipes/pages/Favorites'
import Login from '../features/auth/pages/login'
import ProtectedRoute from '../components/protectedRoute'
import NotFound from '../features/recipes/pages/NotFound'


const AppRoutes = () => {
  return (
    <>
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
