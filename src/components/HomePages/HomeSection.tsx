import React from 'react'
import { Element } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import {ImgHome} from '../../data/DataFile'

//components
import AnimateText from './AnimateText'
const HomeSection = () => {
  return (
    <Element name="home">
      <section className="mycontainer md:flex-row md:py-0 md:items-center lg:items-start">

        <main className="flex flex-col gap-2 w-[90%] sm:w-full md:mt-0 lg:mt-20 xl:mt-28 ">
          <h1 className="text-name font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-sans">IGIE BOY<br /> BALDESANSO</h1>
          <h3 className="text-sm font-bold pl-2 mt-4 sm:mt-5  xl:mt-6 xl:text-lg">
            A <AnimateText/>
          </h3>
          <p className="text-xs mt-2 w-[80%] max-w-[30rem] xl:text-sm gap-2 pl-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="w-fit h-fit flex gap-5 mt-10 pl-2">
            <button className="text-xs bg-btnLight px-7 py-2 rounded-sm text-textDark font-semibold xl:text-sm">
                Portfolio
            </button>
            <button className="text-xs px-6 py-2 border-[1px] border-btnLight  rounded-sm text-btnLight font-semibold xl:text-sm">
                Download CV
            </button>
          </div>
        </main>
        <LazyLoadImage 
        src={ImgHome}
        alt="homeImage"
        className="w-[80%] rounded-full mt-5 sm:w-[70%] md:w-[50%] md:mt-0 max-w-[45rem] object-cover brightness-95"
        />

      </section>
    </Element>
  )
}

export default HomeSection
