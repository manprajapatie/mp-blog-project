import React from 'react'
import BannerSlider from '../components/home/BannerSlider'
import AboutUs from '../components/home/AboutUs'
import RandomRecipes from '../components/home/RandomRecipes'



const Home = () => {


  return (
    <>
      <div
        className=
        'flex flex-col h-auto max-w-7xl mx-auto'>
        <BannerSlider />
        <AboutUs />
        <RandomRecipes />
      </div>

    </>
  )
}

export default Home
