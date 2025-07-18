import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Header = () => {

  const dispatch = useDispatch()
  const location = useLocation() //give info of current route (page)

  //send Logout data to store
  const handleLogOut = () => {
    dispatch(logout())
  }

  const isLogOutHide = location.pathname === "/Login"

  return (
    <>
      <header className="bg-green-500 text-white p-4 shadow-md flex place-content-between">
        <h1 className="text-2xl font-bold">Recipe Blog</h1>
        <nav className='flex space-x-12 px-50 text-2xl'>
          <Link to="/" className='hover:underline'>Home</Link>
          <Link to="/Favorites" className='hover:underline'>Favorite</Link>

          {!isLogOutHide &&
            <button
              onClick={handleLogOut}
            >
              Logout
            </button>
          }
        </nav>
      </header>
    </>
  )
}

export default Header
