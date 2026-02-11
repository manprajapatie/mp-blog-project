import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
     <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center">
      
      {/*  The Header Banner  */}
      <div className="w-[60%] h-40  bg-[var(--color-primary-800)] flex items-center justify-center rounded-t-[3rem]  shadow-lg">
        
      </div>

      {/*  Negative Margin */}
      <div className="w-full max-w-xl px-4 -mt-20 md:-mt-32 z-10">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12 text-center">
          
          {/* 3. 404 */}
          <div className="mb-6">
            <h2 className="text-8xl md:text-[9rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-[var(--color-primary-800)] via-[var(--color-primary-400)] to-[var(--color-Secondary-300)]">
              404
            </h2>
            <p className="text-[var(--color-primary-800)] font-bold text-xl uppercase tracking-widest mt-2">
              Page Not Found
            </p>
          </div>

          {/* Balanced Text*/}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[var(--color-Secondary-800)]">
              Whoops! This link is broken.
            </h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              The Receipy you're looking for might not available right now.
            </p>
          </div>

          {/* Homa Page Btn */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-[var(--color-primary-800)] hover:bg-[var(--color-primary-600)] text-white font-bold rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              Home Page
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-gray-50 border border-gray-200 text-[var(--color-Secondary-800)] font-bold rounded-2xl hover:bg-gray-100 transition-all"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default NotFound
