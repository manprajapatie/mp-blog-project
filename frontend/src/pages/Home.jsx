import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDebounce } from '../utils/useDebounce'
import BannerSlider from '../components/home/BannerSlider'
import AboutUs from '../components/home/AboutUs'
import RandomRecipes from '../components/home/RandomRecipes'


const Home = () => {

  return (
    <>
      <BannerSlider />
      <AboutUs />
      <RandomRecipes />

    </>
  )
}

export default Home
