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
import About from '../AboutPages/About'
import DarkModeController from './DarkModeController'
import { IconType } from 'react-icons/lib'
const LandingPage = () => {
  const mobileNav = useRef<HTMLElement | null>(null)
  const burger = useRef<HTMLDivElement | null>(null)
  const close = useRef<HTMLDivElement | null>(null)
  const hundleOpenNav = (): void => {
    if (mobileNav.current?.classList.contains('-translate-y-full')) {
      mobileNav.current?.classList.remove('-translate-y-full')
      mobileNav.current?.classList.add('translate-y-0')
     close.current?.classList.remove('hidden')
      burger.current?.classList.add('hidden')
     
    } else {
      mobileNav.current?.classList.add('-translate-y-full')
      mobileNav.current?.classList.remove('translate-y-0')
      close.current?.classList.add('hidden')
      burger.current?.classList.remove('hidden')
    }
  }

 
  return (
    <section className="bg-primaryLight dark:bg-primaryDark text-textLight dark:text-textDark w-screen h-screen flex flex-col lg:flex-row">
      <aside className="w-screen flex flex-col items-center h-20 bg-secondaryLight text-textDark relative z-50 lg:h-screen lg:w-72 xl:w-80">

        <header className="w-full max-w-[45rem] h-full flex items-center justify-center relative border-2 border-black z-50 lg:hidden">
          <button className="absolute left-5 top-7" onClick={hundleOpenNav}>
            <div ref={burger}><AiOutlineAlignLeft  className="w-6 h-6"/></div>
            <div ref={close} className="hidden"><AiOutlineClose className="w-6 h-6"/></div>
          </button>
          <h1 className="text-textDark font-bold ">IGIE</h1>
        </header>

        <main
          ref={mobileNav}
          className="border-2 border-black w-full h-screen bg-secondaryLight pt-20 flex flex-col items-center gap-8 px-10  absolute left-0 top-0 -translate-y-full transition-all  lg:static lg:w-full lg:h-full lg:translate-y-0 lg:pt-10"
        >
          <h1 className=" hidden lg:block  mb-10  text-textDark font-bold text-xl">
            IGIE
          </h1>
          <div className="min-w-[10rem] w-[50%] h-[10rem] max-w-[10rem] bg-primaryLight mt-5  rounded-full flex items-center justify-center pt-2">
            <LazyLoadImage
              src={Image}
              alt="image"
              className="w-[90%] object-cover rounded-full"
            />
          </div>
          <h1 className="text-xs mt-2 text-center w-[90%] max-w-[15rem]">
            Hi, my name is Igie Baldesanso and I’m a website developer. Welcome
            to my personal website!
          </h1>
          <div className="w-full  h-fit flex items-center justify-center gap-4">
            <div className="h-fit w-fit p-[6px] bg-primaryLight text-secondaryLight rounded-full cursor-pointer">
              <SiFacebook className="w-4 h-4" />
            </div>
            <div className="h-fit w-fit p-[6px] bg-primaryLight text-secondaryLight rounded-full cursor-pointer">
              <SiGithub className="w-4 h-4" />
            </div>
            <div className="h-fit w-fit p-[6px] bg-primaryLight text-secondaryLight rounded-full cursor-pointer">
              <AiOutlineMail className="w-4 h-4" />
            </div>
            <div className="h-fit w-fit p-[6px] bg-primaryLight text-secondaryLight rounded-full cursor-pointer">
              <SiLinkedin className="w-4 h-4" />
            </div>
          </div>

<div className="w-full max-w-[22rem] h-fit flex flex-col items-center border-y-[1px] py-5 border-y-gray-200 lg:w-full">
          <nav className="w-full h-fit">
            <ul className="w-full h-fit flex flex-col items-start gap-4">

              <li className="flex gap-1 hover:text-primaryDark">
                <AiOutlineUser/><Link
                  activeClass="activeLink"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="cursor-pointer font-bold text-xs"
                >
                  About Me
                </Link>
              </li>

              <li className="flex gap-1 hover:text-primaryDark">
               <AiOutlineLaptop/><Link
                  activeClass="activeLink"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="cursor-pointer font-bold text-xs"
                >
                  Portfolio
                </Link>
              </li>
              <li className="flex gap-1 hover:text-primaryDark">
               <AiOutlineShopping/> <Link
                  activeClass="activeLink"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="cursor-pointer font-bold text-xs"
                >
                  Service & Pricing
                </Link>
              </li>
              <li className="flex gap-1 hover:text-primaryDark">
               <AiOutlineFileText/> <Link
                  activeClass="activeLink"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="cursor-pointer font-bold text-xs"
                >
                  Blog
                </Link>
              </li>
              <li className="flex gap-1 hover:text-primaryDark">
               <AiOutlineWhatsApp/> <Link
                  activeClass="activeLink"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="cursor-pointer font-bold text-xs"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </nav>

          <button className="mt-16 w-fit h-fit text-xs py-3 px-10 rounded-sm font-semibold bg-primaryDark">Hire Me</button>
          </div>

    <div className="w-full h-fit flex items-center justify-center ">
    <DarkModeController/>
    </div>
        </main>
      
      </aside>

      <main className="flex-1  w-screen overflow-y-scroll text-textLight dark:text-textDark bg-primaryLight dark:bg-primaryDark">
        <About />
        <About />
      </main>
    </section>
  )
}

export default LandingPage
