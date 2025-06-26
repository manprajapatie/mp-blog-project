import React from 'react'


export const paginationRange = (currentPage, totalPage) => {


    const range = [] //How many pages are shown
    const nextPrevPage = 2 //How many previous and next pages shown, without including current page

    range.push(1); // Always includ 1
    const left = Math.max(2, currentPage - nextPrevPage)
    if (left > 2) range.push("...") //if left side is started from 3 then include ... after 1

    const right = Math.min(totalPage - 1, currentPage + nextPrevPage)

    //This Loop will push all the range that have to show
    for (let i = left; i <= right; i++) {
        range.push(i);
    }

    if (right < totalPage - 1) range.push("....")
    if (totalPage > 1) range.push(totalPage)

    return range
}

