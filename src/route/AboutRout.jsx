import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Morep from '../presentations/about/Morep'
import About from '../presentations/about/About'

function AboutRout() {
  return (
    <div>
        <Routes>
        <Route index element={ <About/>} />
        <Route path='morep/*' element={<Morep/>} />
        </Routes>
    </div>
  )
}

export default AboutRout