import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Header from '../components/Header';
import nahuel from '../assets/nahuel.png';
import ContactForm from '../components/ContactForm';
import About from '../components/About';
import Skills from '../components/Skills';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(false);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setIsTransitioning(true);
    setDarkMode(!darkMode);
  };



  
  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <section className='flex-1 '>
        <div className='sticky top-0 z-[100] bg-gray-200 dark:bg-gray-900'>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className={`' bg-gray-200 dark:bg-gray-900 w-full h-5/6 flex-1 pt-8 pb-10 overflow-x-hidden overflow-y-hidden transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
          <div className='flex justify-center items-center'>
            <div className={`' rounded-full h-[34rem] w-[34rem] bg-gray-200 dark:bg-gray-900 pt-20 flex items-center justify-center border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 hover:shadow-orange-400 hover:border-orange-300   z-20 transition-colors duration-500 ease-in-out ${isTransitioning ? 'ease-in-out' : ''}'`}>
              <div className='flex justify-center items-center pt-20 h-[40rem] w-[40rem]'>
                <img src={nahuel} className='flex' />
              </div>
            </div>

            
                <h1 className='absolute flex text-center text-[3rem] top-36 md:text-[5rem]  md:top-24 font-bebas z-50 text-gray-200 dark:text-gray-900 font-extrabold  '>FULL STACK DEVELOPER
                
                <h1 className='absolute flex text-center text-[2.98rem] md:text-[4.90rem] md:left-[0.3rem]  font-bebas z-40 text-gray-900 dark:text-gray-200  '>FULL STACK DEVELOPER</h1>
                </h1>

            <div className='relative z-0'>
              <div className={`' absolute -left-10 rounded-full h-[14rem] w-[14rem] bg-gray-200 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 hover:shadow-orange-400 hover:border-orange-300 overflow-hidden z-0 ease-in-out  transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`} />
            </div>

            <div className=' relative z-0 left-72 bottom-52'>
              <div className= {`' absolute rounded-full h-[24rem] w-[24rem] bg-gray-200 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 hover:shadow-orange-400 hover:border-orange-300 transition-colors duration-500 ease-in-out ${isTransitioning ? 'ease-in-out' : ''}'`} />
            </div>

            <div className=' relative z-0 left-32 bottom-40'>
              <div className={`' absolute rounded-full h-[10rem] w-[10rem] bg-gray-200 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 hover:shadow-orange-400 hover:border-orange-300 transition-colors duration-500 ease-in-out ${isTransitioning ? 'ease-in-out' : ''}'`} />
            </div>

            {/* left */}

            <div className= ' relative z-0 -left-[45rem]'>
              <div className={`' absolute rounded-full h-[14rem] w-[14rem] bg-gray-200 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 hover:shadow-orange-400 hover:border-orange-300 overflow-hidden z-0 transition-colors duration-500 ease-in-out ${isTransitioning ? 'ease-in-out' : ''}'`} />
            </div>

            <div className=' relative z-0 -left-[75rem] bottom-52'>
              <div className={`' absolute rounded-full h-[24rem] w-[24rem] bg-gray-200 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 hover:shadow-orange-400 hover:border-orange-300 transition-colors duration-500 ease-in-out ${isTransitioning ? 'ease-in-out' : ''}'`} />
            </div>

            <div className=' relative z-0 -left-[51rem] bottom-40'>
              <div className={`' absolute rounded-full h-[10rem] w-[10rem] bg-gray-200 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 hover:shadow-orange-400 hover:border-orange-300 transition-colors duration-500 ease-in-out ${isTransitioning ? 'ease-in-out' : ''}'`} />
            </div>
          </div>
        </div>
        <div>
            <About darkMode={darkMode} isTransitioning={isTransitioning} toggleDarkMode={toggleDarkMode}/>
        </div>

        <div>
            <Skills darkMode={darkMode} isTransitioning={isTransitioning} toggleDarkMode={toggleDarkMode}/>
        </div>

        <div id="contact-form">
        <ContactForm darkMode={darkMode} isTransitioning={isTransitioning} toggleDarkMode={toggleDarkMode} />

        </div>
      </section>
    </div>
  );
};

export default Portfolio;
