import React,{useRef} from 'react'
import { Link } from 'react-scroll'

//icons
import { HiBars3BottomLeft,HiXMark } from "react-icons/hi2";

import DarkModeController from './DarkModeController'
import { IconType } from 'react-icons/lib';
const NavSection = () => {
  const navLink = useRef<HTMLDivElement | null>(null)
const openBtn = useRef<IconType |null> (null)
const closeBtn = useRef<IconType |null> (null)

function hundleNav(){
  if(navLink.current?.classList.contains('-translate-y-full')){
    navLink.current?.classList.remove('-translate-y-full')
  }else{
    navLink.current?.classList.add('-translate-y-full')
  }
}
  return (
    <nav className="w-full h-full flex items-center justify-center px-5 relative text-textLight dark:text-textDark lg:justify-between lg:w-[90vw] lg:items-end">
        <HiBars3BottomLeft className="w-8 h-8 absolute left-5 top-6 cursor-pointer sm:left-14 lg:hidden" onClick={hundleNav}/>
      <h1 className="font-bold text-lg lg:text-2xl lg:mb-4">IGIE</h1>

      <div ref={navLink} className="flex  flex-col items-center justify-start pt-24 gap-4 absolute top-0 left-0 w-screen h-screen bg-primaryLight dark:bg-primaryDark text-textLight dark:text-textDark transition-all 
      sm:px-10 lg:static lg:pt-0 lg:h-[80%]  lg:flex-row lg:items-center lg:justify-center lg:w-fit lg:gap-10 xl:gap-16 2xl:gap-24 lg:translate-y-0 ">
        <HiXMark className="w-8 h-8 absolute left-5 top-6  cursor-pointer sm:left-14 lg:hidden" onClick={hundleNav}/>
        <ul className="w-full h-fit flex flex-col items-start gap-5 px-5 py-16 lg:flex-row lg:gap-14 xl:gap-20">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
            className="link cursor-pointer text-sm font-bold hover:text-btnLight"
          >
          Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
            className="link cursor-pointer text-sm font-bold hover:text-btnLight"
          >
          About Me
          </Link>
          <Link
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
            className="link cursor-pointer text-sm font-bold hover:text-btnLight"
          >
          Services
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
            className="link cursor-pointer text-sm font-bold hover:text-btnLight"
          >
          Portfolio
          </Link>
        </ul>
        <div className="w-fit h-fit flex items-center justify-center absolute right-6 top-6 sm:right-14 lg:static">
            <DarkModeController/>
        </div>
      </div>
    </nav>
  )
}

export default NavSection
