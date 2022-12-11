import { useState,Suspense,lazy } from 'react'
import { BrowserRouter as Browser,Routes, Route } from 'react-router-dom'


import ScreenLoader from '../components/loaderFile/ScreenLoader'
import ErrorPage from '../components/loaderFile/ErrorPage'
const Router = () => {

const LandingPage = lazy(()=> import('../components/landingFile/LandingPage'))
// const HomeSection = lazy(()=> import('../components/homePages/HomeSection'))
// const AboutSection = lazy(() => import('../components/aboutPages/AboutSection'))
// const ServiceSection = lazy(() => import('../components/servicePages/ServiceSection'))
// const PortfolioSection = lazy(() => import('../components/portfolioPages/PortfolioSection'))

  return (
  
        <Suspense fallback={<ScreenLoader/>}>
        <Browser>
        <Routes>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/personal_website/" element={<LandingPage/>}/>
        </Routes>
        </Browser>
        </Suspense>
    
      
  )
}

export default Router