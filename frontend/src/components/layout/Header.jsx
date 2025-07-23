import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import man from '../../assets/man.png'

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

      {/* Contact No & Login */}
      <div className='w-7xl flex justify-between mx-auto  rounded-bl-3xl rounded-br-3xl shadow-md/25'>

        <p className='py-2.5 px-8 text-[1.1rem] font-bold text-primary-800 '>
          Contact Us +91 1234567890
        </p>


        <button
          onClick={handleLogOut}
          className='
              py-2.5 px-8 text-[1.1rem] font-bold text-Secondary-800 cursor-pointer hover:text-primary-800 transition-all duration-300'
        >
          Logout
        </button>


      </div>


      {/* Navigation */}
      <header className="text-primary-800  p-4 shadow-md flex place-content-between">



        {/* <h1 className="text-2xl font-bold">Recipe Blog</h1> */}
        <img src={man} className='h-12 ml-2' alt="Img" />


        {!isLogOutHide &&
          <nav className='flex space-x-10 px-10 text-xl items-center '>
            <Link to="/" className='hover:underline '>Home</Link>
            <Link to="/Favorites" className='hover:underline '>Favorite</Link>


          </nav>
        }
      </header>
    </>
  )
}

export default Header
