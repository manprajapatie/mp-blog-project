import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/Login" replace/>
  //replace is a prop of react router, without it user can easily move to protected page without even authentication
}

export default ProtectedRoute;