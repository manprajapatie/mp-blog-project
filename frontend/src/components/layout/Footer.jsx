import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white text-center p-7">
        <div className='w-full bg-gray-900 grid grid-cols-1 sm:grid-cols-3 p-5'>

          {/* Call us*/}
          
          <div className='  flex justify-center items-center flex-col m-3'>
            <h1 className='text-xl md:text-3xl mb-2 sm:mb-4  '>Call Us On :</h1>
            <p className='text-primary-800'>+91 1111111110515</p>
          </div>

          {/* Opening Hour */}

          <div className='  flex justify-center items-center flex-col m-3'>
            <h1 className='text-xl md:text-3xl mb-2 sm:mb-4 '>Opening Hours :</h1>
            <p className='text-primary-800'>10:00 AM - 10:00PM</p>
          </div>

          {/* Mail Us */}

          <div className='  flex justify-center items-center flex-col m-3'>
            <h1 className='text-xl md:text-3xl mb-2 sm:mb-4 '> Email Us :</h1>
            <p className='text-primary-800'>manprajapatie@gmail.com</p>
          </div>

        </div>
        <p className='pt-4'>&copy; 2025 Recipe Blog. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer
