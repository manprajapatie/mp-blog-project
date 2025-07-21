import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import man from '../assets/man.png'

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
      <header className="bg-green-500 text-white p-2 shadow-md flex place-content-between">
        {/* <h1 className="text-2xl font-bold">Recipe Blog</h1> */}
        <img src={man} className='h-10 ml-5' alt="Img" />
        

          {!isLogOutHide &&
          <nav className='flex space-x-10 px-10 text-2xl'>
          <Link to="/" className='hover:underline '>Home</Link>
          <Link to="/Favorites" className='hover:underline pr-18'>Favorite</Link>

            <button
              onClick={handleLogOut}
              className=' bg-amber-50 rounded-2xl w-20 text-emerald-700 text-sm hover:text-emerald-950 hover:font-bold transition-all duration-300 cursor-pointer'
            >
              Logout
            </button>
        </nav>
          }
      </header>
    </>
  )
}

export default Header
