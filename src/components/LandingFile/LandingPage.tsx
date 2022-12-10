import React, { useState, useRef } from 'react'

import { Link } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion as m } from 'framer-motion'
import '../../styles/App.scss'
import Image from '../../assets/newPic.png'
//icons
import {AiOutlineLaptop,AiOutlineShopping,AiOutlineUser, AiOutlineFileText, AiOutlineWhatsApp,AiOutlineMail} from "react-icons/ai"
import { FaBlog} from "react-icons/fa"

import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai'
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si'

//component
import NavSection from '../NavigationPages/NavSection'
import AboutSection from '../AboutPages/AboutSection'
import { IconType } from 'react-icons/lib'
const LandingPage = () => {

return(
  <section className="h-fit w-screen flex flex-col bg-primaryLight dark:bg-primaryDark items-center transition-all">
    <header className="w-full h-20 fixed top-0 left-0 bg-primaryLight dark:bg-primaryDark flex justify-center shadow-md transition-all">
      <NavSection />
    </header>
    
  </section>
  
  )
  
}

export default LandingPage
