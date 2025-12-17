import React from 'react'
import { paginationRange } from '../../utils/paginationRange'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {

    const getPaginationRange = paginationRange(currentPage, totalPages)

    if (totalPages <= 1) return null;

    return (
        <>
            <div className='flex justify-center mt-10 space-x-2 flex-wrap'>


                {/* Previes Button */}
                <button
                    className='px-4 py-2 rounded bg-gray-300 disabled:opacity-50'
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    prev
                </button>

                {/* numbers to show */}
                {getPaginationRange.map((page, index) =>
                    page === "..." ? (<span key={index} className="px-4 py-2 text-gray-500">...</span>)
                        : (<button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded ${page === currentPage ? "bg-blue-500 text-white" : "bg-white text-black"
                                }`}
                        >
                            {page}
                        </button>)
                )}

                {/* Previes Button */}
                <button
                    className='px-4 py-2 rounded bg-gray-300 disabled:opacity-50'
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    next
                </button>

            </div >

        </>
    )
}

export default Pagination
