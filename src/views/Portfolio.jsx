import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import nahuel from '../assets/nahuel.png';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <section className='flex-1 overflow-x-hidden'>
        <div className='sticky top-0 z-[100] bg-gray-400 dark:bg-gray-900'>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className='bg-gray-400 dark:bg-gray-900 w-full h-5/6 flex-1 pt-8 pb-10 overflow-x-hidden overflow-y-hidden'>
          <div className='flex justify-center items-center'>
            <div className='rounded-full h-[34rem] w-[34rem] bg-gray-400 dark:bg-gray-900 pt-20 flex items-center justify-center border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 z-20'>
              <div className='flex justify-center items-center pt-20 h-[40rem] w-[40rem]'>
                <img src={nahuel} className='flex' />
              </div>
            </div>

            <div className='relative z-0'>
              <div className='absolute -left-10 rounded-full h-[14rem] w-[14rem] bg-gray-400 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 overflow-hidden z-0' />
            </div>

            <div className='relative z-0 left-72 bottom-52'>
              <div className='absolute rounded-full h-[24rem] w-[24rem] bg-gray-400 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300' />
            </div>

            <div className='relative z-0 left-32 bottom-40'>
              <div className='absolute rounded-full h-[10rem] w-[10rem] bg-gray-400 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300' />
            </div>

            {/* left */}

            <div className='relative z-0 -left-[45rem]'>
              <div className='absolute rounded-full h-[14rem] w-[14rem] bg-gray-400 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300 overflow-hidden z-0' />
            </div>

            <div className='relative z-0 -left-[75rem] bottom-52'>
              <div className='absolute rounded-full h-[24rem] w-[24rem] bg-gray-400 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300' />
            </div>

            <div className='relative z-0 -left-[51rem] bottom-40'>
              <div className='absolute rounded-full h-[10rem] w-[10rem] bg-gray-400 dark:bg-gray-900 border-[0.7rem] border-orange-200 outline-2 outline-orange-400 shadow-2xl shadow-orange-300' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
