import React from 'react'
import Banner from '../components/Banner'
import FlashSales from '../components/FlashSales'
import CategoryItem from '../components/CategoryItem'
import BestSelling from '../components/BestSelling'
import Frame from '../components/Frame'
import Explore from '../components/Explore'
import NewArrival from '../components/NewArrival'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
     <Banner/> 
     <FlashSales/>
     <CategoryItem/>
     <BestSelling/>
     <Frame/>
     <Explore/>
     <NewArrival/>
     <Services/>
    </>
  )
}

export default Home
