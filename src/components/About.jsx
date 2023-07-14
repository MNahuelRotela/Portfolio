import nahuel2 from "../assets/nahuel2.png"
import React, { useState, useEffect, useRef } from 'react';


const About = ({ darkMode, isTransitioning, toggleDarkMode }) => {
    return (
        <div className={`bg-gray-200 dark:bg-gray-900 w-full  h-full flex transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>

  <div class="px-4 py-12   sm:px-6 md:px-12 lg:px-24 lg:py-24 w-full h-full">
    <div class="flex flex-wrap items-center mx-auto">
      <div class="w-full lg:max-w-lg lg:w-full rounded-xl">
        <div className=" justify-center items-center flex">
          <div class="relative w-10/12 max-w-lg">
            <div class={`absolute -top-8 rounded-full bg-orange-300 hover:opacity-70 -left-4 md:w-72 md:h-72 mix-blend-multiply dark:mix-blend-normal dark:bg-orange-200 filter blur-xl opacity-60 animate-blob transition-opacity duration-500 hover:ease-in-out hover:duration-500 hover:transition-opacity ${isTransitioning ? 'ease-in-out' : ''}'`}></div>

            <div class={`absolute rounded-full bg-orange-300 hover:opacity-70 -bottom-16 left-80 md:w-72 md:h-72 mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-40 animate-blob animation-delay-4000 transition-opacity duration-500 hover:ease-in-out hover:duration-500 hover:transition-opacity ${isTransitioning ? 'ease-in-out' : ''}'`}></div>
            <div class="relative flex">
              <img class="object-cover mx-auto rounded-lg shadow-2xl" alt="hero" src={nahuel2}/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <span class={`mb-8 text-xs font-bold tracking-widest text-yellow-600 uppercase transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}> About Me </span>
        <h1 class={`mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-800 dark:text-gray-200 md:text-7xl lg:text-5xl transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>Nahuel Rotela</h1>
        <div className="relative">
        <div class={`absolute -top-72 rounded-full bg-orange-300 hover:opacity-70 -right-72 md:w-40 md:h-40 mix-blend-multiply dark:mix-blend-normal z-0 filter blur-xl opacity-40 animate-blob transition-opacity duration-500 hover:ease-in-out hover:duration-500 hover:transition-opacity ${isTransitioning ? 'ease-in-out' : ''}'`}></div>
        </div>
        <p class={`mb-8 text-base leading-relaxed text-center text-gray-500 dark:text-white transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>💻 ⌨ I'm Nahuel! A 23 year old Full Stack developer, focused on front-end with a positive attitude, strong technical skills, a passion for innovation and implementing new ideas. What has managed to perform in an ideal way in my IT career, making all the projects that I have carried out stand out for their functionality and clean interface, but above all the human quality that we offer to the users and the work team to which belong.</p>
        
      </div>
    </div>
  </div>

        </div>
    )
}
export default About;