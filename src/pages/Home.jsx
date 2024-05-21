import React from 'react'
import Banner from '../components/Banner'
import FlashSales from '../components/FlashSales'
import CategoryItem from '../components/CategoryItem'
import BestSelling from '../components/BestSelling'
import Frame from '../components/Frame'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <>
     <Banner/> 
     <FlashSales/>
     <CategoryItem/>
     <BestSelling/>
     <Frame/>
     <Explore/>
    </>
  )
}

export default Home
