import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import man from '../../assets/man.png'
import man2 from '../../assets/man2.png'

const Header = () => {

  const dispatch = useDispatch()
  const location = useLocation() //give info of current route (page)

  //send Logout data to store
  const handleLogOut = () => {
    dispatch(logout())
  }

  const isLogOutHide = location.pathname === "/Login"
  const isCurrentPageHome = location.pathname === "/"

  return (
    <>

      <div className='relative z-10'>

        {!isLogOutHide && (
          <>
            {/* Contact No & Login */}
            < div className='max-w-7xl w-full flex justify-between mx-auto rounded-bl-3xl rounded-br-3xl shadow-md/25 relative'>

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


            {/* Navigation & Logo */}
            <header className="text-Secondary-500  max-w-full w-full border-solid border-2 border-Secondary-500  p-4 shadow-md flex justify-between absolute top-[56px] left-0">



              {/* <h1 className="text-2xl font-bold">Recipe Blog</h1> */}
              {!isCurrentPageHome ? <img src={man2} className='h-12 ml-2' alt="Img" /> : <img src={man} className='h-12 ml-2' alt="Img" /> }
              



              <nav className='flex space-x-10 px-10 text-xl items-center '>
                <Link to="/" className='hover:underline '>Home</Link>
                <Link to="/Favorites" className='hover:underline '>Favorite</Link>
                <Link to="/AllRecipes" className='hover:underline '>Recipes</Link>


              </nav>

            </header>
          </>
        )}
      </div >
    </>
  )
}

export default Header
