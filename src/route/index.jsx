import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../layout/App';
import Home from '../presentations/home/Home';
import InstitutesPage from '../presentations/Institutes/InstitutesPage';
import Academice from '../presentations/academice/Academice';
import About from '../presentations/about/About';
import AboutRout from './AboutRout';
const Router = () => {
  return (
    <div>
         <BrowserRouter>
        <Routes>
              <Route path="/" element={<App />}> 
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<AboutRout />} />
              <Route path="/institute" element={<InstitutesPage />} />
              <Route path="/academice" element={<Academice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router