import React, { useEffect, useState } from 'react'
import img1 from "../../assets/FoodImg/FoodImg1.png"
import img2 from "../../assets/FoodImg/FoodImg2.png"
import img3 from "../../assets/FoodImg/FoodImg3.png"
import img4 from "../../assets/FoodImg/FoodImg4.png"
import { Link } from 'react-router-dom'

const BannerSlider = () => {

  const img = [
    { src: img1, Title: "Chowmain", Detail: " lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd  " },
    { src: img2, Title: "Man", Detail: " lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd  " },
    { src: img3, Title: "Prajapati", Detail: " lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd  " },
    { src: img4, Title: "Hai yaha per", Detail: " lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd lorem12asdf asd  " },
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex((i) => (i + 1) % img.length)
      }, 5000);
    return () => clearInterval(interval)
  }, [])


  return (

    <>
      <section className='flex max-w-full w-full h-[45rem] border-solid border-2 border-Secondary-100 justify-end relative'>

        {/* Container For Right Design */}
        <div className='max-w-[60%] w-full h-[95%] bg-primary-800 rounded-bl-[15rem] flex justify-center items-center'>
        </div>

        {/* Container For Text and Image */}

        <div
          className='flex justify-between max-w-full w-full h-[43rem] border-solid border-2 border-Secondary-100 absolute items-center'
          key={index}
        >

          {/* Text Area */}
          <div className=' border-solid border-2 border-black w-[30%] h-1/2 m-5 p-2 relative TransformTopToBottom'>
            <h2 className='font-Rouge text-4xl text-primary-800 pb-3'>Namasty</h2>
            <h1 className='font-Lora text-4xl bold pb-4'> {img[index].Title}
              <span className='text-primary-800'> Low Price</span></h1>
            <p className='mb-5 text-[1.1rem]'>
              {img[index].Detail}
            </p>
            <Link
              to="/Favorites"
              className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg  px-6 py-3 text-center me-2 m-1 text-[1.1rem]'
            >
              All Recipes
            </Link>
          </div>

          {/* Image Area */}



          <div className='relative TransformRightToLeft border-solid border-2 border-black h-3/4 flex justify-center items-center grow-10 ' key={index}>
            <img
              src={img[index].src}

              alt=""
              className='h-[70%]  ZoomInOut ' />
          </div>

        </div>
      </section>

    </>
  )
}

export default BannerSlider
