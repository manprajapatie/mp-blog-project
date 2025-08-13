import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
       <div className='relative justify-center max-w-full w-full h-50 flex bg-primary-800 rounded-bl-4xl rounded-br-4xl'>
        <h1 className='mt-auto text-4xl font-bold m-6 text-Secondary-500 font-Lora z-10'></h1>
      </div>

      {/* <div className='min-h-screen flex flex-col justify-center items-center text-center'>
        <h1 className='text-4xl font-bold mb-2'> 404 Page Not Found</h1>
        <p className='mb-4 text-gray-600 '>This Page is not Exist</p>

        <Link
        to="/"
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        >
            Go To Home or Login Page
        </Link>
      </div> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
                <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                  <h1 className="text-9xl font-bold text-Secondary-500 ">404</h1>
                  <p className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mt-4">
                    Oops! Product Not Found
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-500 mt-2">
                    We can't seem to find the product you're looking for.
                  </p>
                  <Link
                    to="/"
                    className="mt-8 inline-block px-6 py-3 text-white font-bold bg-primary-400 rounded-md shadow-md hover:bg-primary-600 transition duration-300"
                  >
                    Go Back to Home
                  </Link>
                </div>
              </div>
    </>
  )
}

export default NotFound
