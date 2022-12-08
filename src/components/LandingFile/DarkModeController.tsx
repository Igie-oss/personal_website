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
    <div className="flex flex-col gap-1 items-center">
      <h1 className="text-sm font-semibold">Theme</h1>
      <button
        className="w-16 h-fit py-1 px-2 bg-primaryLight text-primaryDark dark:bg-primaryDark dark:text-primaryLight flex  justify-between rounded-xl"
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
    </div>
  )
}

export default DarkModeController
