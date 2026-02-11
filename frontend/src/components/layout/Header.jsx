import React, { useState } from 'react'
import { Link, useLocation, matchRoutes } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import man from '../../assets/man.png'
import man2 from '../../assets/man2.png'
// import {protectedRoute as AppRoutes} from '../../routes/AppRoutes' //Give all routes

//---------------import Menu and close icon from lucide react
import { Menu, X } from 'lucide-react';

const Header = () => {

  //-------------- Puting static route for perform non existing route logic
  const validRoutes = [
    "/",
    "/Login",
    "/Favorites",
    "/AllRecipes",
    "/RecipeDetails",
  ];


  // --------------Dropdown icon is open or not
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation() //give info of current route (page)

  //---------------send Logout data to store
  const handleLogOut = () => {
    dispatch(logout())
  }

  //-------------- Match Route is exist or Not
  const is404 =
    !validRoutes.some((route) =>
      location.pathname === route ||
      location.pathname.startsWith(route + "/")
    );


  const isLogOutHide = location.pathname === "/Login"
  const isCurrentPageHome = location.pathname === "/"

  return (
    <>

      <div className='relative z-10'>

        {!isLogOutHide && (
          <>
            {/* Contact No & Login */}
            < div className='max-w-7xl w-full flex justify-between mx-auto rounded-bl-3xl rounded-br-3xl shadow-md/25 relative'>

              <p className='py-2.5 px-8 text-[0.85rem] sm:text-[1.1rem] font-bold text-primary-800 '>
                Contact Us +911234567890
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

            {/* If it is true Show nothing, false show header */}
            {!is404 && (
              < header className="bg-primary-600 md:bg-transparent text-Secondary-500  max-w-7xl mx-auto border-solid   border-2 border-Secondary-500  p-4 shadow-md flex justify-between  top-[56px] ">



                {/* <h1 className="text-2xl font-bold">Recipe Blog</h1> */}
                {
                  (
                    <>
                      <img src={man} className='h-12 ml-2 hidden md:block' alt="Img" />
                      <img src={man2} className='h-12 ml-2 md:hidden' alt="Img" />
                    </>
                  )}

                {/*----------------------- For Greater then md */}
                <nav className={`hidden md:flex space-x-10 px-[10%] text-xl items-center rounded-xl bg-primary-400`}>
                  <Link to="/" className='hover:underline '>Home</Link>
                  <Link to="/Favorites" className='hover:underline '>Favorite</Link>
                  <Link to="/AllRecipes" className='hover:underline '>Recipes</Link>
                </nav>

                {/*----------------------- For less then md */}

                {/* Mobile Menu Button (3 dots / hamburger) */}
                <button
                  className="md:hidden"
                  onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                >
                  {dropdownIsOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {dropdownIsOpen && (
                  <ul className="
                md:hidden
                absolute top-full right-0 w-[35%]
                bg-Secondary-500
                flex flex-col
                text-center
                text-lg
                sm:text-2xl
                font-bold
                shadow-lg
                text-Secondary-800
                z-10
                overflow-hidden
                rounded-2xl
                
              ">
                    <li className="py-3 border-b border-b-gray-400">
                      <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    </li>
                    <li className="py-3 border-b border-b-gray-400">
                      <Link to="/Favorites" onClick={() => setOpen(false)}>Favorites</Link>
                    </li>
                    <li className="py-3">
                      <Link to="/AllRecipes" onClick={() => setOpen(false)}>Recipes</Link>
                    </li>
                  </ul>
                )}

              </header>
            )
            }
          </>
        )}
      </div >
    </>
  )
}

export default Header
