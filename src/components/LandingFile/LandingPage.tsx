import React, { useState, useRef } from 'react'

import { Link } from 'react-scroll'

import { motion as m } from 'framer-motion'
import '../../styles/App.scss'
import Image from '../../assets/newPic.png'
//icons
import {AiOutlineLaptop,AiOutlineShopping,AiOutlineUser, AiOutlineFileText, AiOutlineWhatsApp,AiOutlineMail} from "react-icons/ai"
import { FaBlog} from "react-icons/fa"

import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai'
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si'

//component
import NavSection from '../navigationPages/NavSection'
import HomeSection from '../homePages/HomeSection'
import AboutSection from '../aboutPages/AboutSection'
import { IconType } from 'react-icons/lib'
const LandingPage = () => {

return(
  <section className="h-fit w-screen">
    <header className="w-full h-20 fixed top-0 left-0 z-50 bg-primaryLight dark:bg-primaryDark flex justify-center shadow-md transition-all">
      <NavSection />
    </header>
    <main className="h-fit w-screen flex flex-col pt-20 bg-primaryLight dark:bg-primaryDark items-center text-textLight dark:text-textDark">
   <HomeSection/>
   <AboutSection/>
    </main>
  </section>
  
  )
  
}

export default LandingPage
