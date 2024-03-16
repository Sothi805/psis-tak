import React from 'react'
import Slide from './component/Slide'
import Cards from './component/Cards'
import { Outlet } from 'react-router-dom'
import RecentNew from './component/RecentNew'
import Footer from './component/Footer'
 
const Home = () => {
  return (
    <div>
      <Slide/>
      <Cards />
      <RecentNew/>
      <Footer/>
      <Outlet/>   
    </div>
  )
}

export default Home