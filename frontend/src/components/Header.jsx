import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="bg-green-500 text-white p-4 shadow-md flex place-content-between">
        <h1 className="text-2xl font-bold">Recipe Blog</h1>
        <nav className='flex space-x-12 px-50 text-2xl'>
       <Link to="/" className='hover:underline'>Home</Link>
       <Link to="/Favorites" className='hover:underline'>Favorite</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
