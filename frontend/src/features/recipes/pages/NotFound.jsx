import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
      
      <div className='min-h-screen flex flex-col justify-center items-center text-center'>
        <h1 className='text-4xl font-bold mb-2'> 404 Page Not Found</h1>
        <p className='mb-4 text-gray-600 '>This Page is not Exist</p>

        <Link
        to="/"
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        >
            Go To Home or Login Page
        </Link>
      </div>
    </>
  )
}

export default NotFound
