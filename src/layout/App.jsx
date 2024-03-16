import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'



const App = () => {
  return (
    <div>
        <NavBar />
        <div >
          <Outlet/>
          
        </div>
    </div>
  )
}

export default App