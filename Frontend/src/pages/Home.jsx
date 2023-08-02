import React from 'react'
import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar'
import BottomNavbar from '../components/BottomNavbar'
import Banners from '../components/home/Banners'
import { Box,styled } from '@mui/material'
import Banner2 from '../components/home/Banner2'
import Banner3 from '../components/home/Banner3'
import Categories from '../components/home/Categories'
import Footer from '../components/Footer'
import Products from '../components/home/Products'



const Home = () => {
  return (
    <>
        <BottomNavbar/>
        <Banners/>
        <Banner2/>
        <Products/>
        <Banner3/>
        <Categories/>
    </>
  )
}

export default Home