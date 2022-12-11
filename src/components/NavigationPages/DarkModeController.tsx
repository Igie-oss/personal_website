import React, { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
//icons
import { BsSun, BsMoonFill } from 'react-icons/bs'

const DarkModeController = () => {
  const [theme, setTheme] = useState<string | null>('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setTheme(localStorage.getItem('Theme') || ' ')
    const toggle = document.querySelector('html') as HTMLElement
    if (theme === 'dark') {
      toggle.classList.add('dark')
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
      toggle.classList.remove('dark')
    }
  }, [theme, isDarkMode])
  const toggleMode = () => {
    if (theme === 'dark') {
      localStorage.setItem('Theme', 'light')
      setIsDarkMode(false)
    } else {
      localStorage.setItem('Theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return (
   
      <button
        className="w-14 h-fit py-[2px] px-2 border-2 border-primaryDark dark:border-primaryLight bg-primaryDark dark:bg-primaryLight text-primaryLight dark:text-primaryDark flex justify-between rounded-xl outline-none
        relative after:content-['Theme'] after:absolute after:-top-5 after:left-1 after:text-xs after:text-textLight dark:after:text-textDark after:hidden hover:after:block transition-all after:font-bold"
        onClick={toggleMode}
      >
        <div className="w-fit h-fit rounded-full">
          {!isDarkMode && (
            <m.div
              initial={{ translateX: 40, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
            >
              <BsSun className="w-4 h-4" />
            </m.div>
          )}
        </div>
        <div className="w-fit h-fit rounded-full">
          {isDarkMode && (
            <m.div
              initial={{ translateX: -40, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
            >
              <BsMoonFill className="w-4 h-4" />
            </m.div>
          )}
        </div>
      </button>
  )
}

export default DarkModeController
