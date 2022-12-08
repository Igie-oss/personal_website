import { useState,Suspense,lazy } from 'react'
import { BrowserRouter as Browser,Routes, Route } from 'react-router-dom'


import ScreenLoader from '../components/loaderFile/ScreenLoader'
import ErrorPage from '../components/loaderFile/ErrorPage'
const Router = () => {

const LandingPage = lazy(()=> import('../components/LandingFile/LandingPage'))
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