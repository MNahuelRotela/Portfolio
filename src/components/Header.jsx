import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoligth from '../assets/1.png';
import logodark from '../assets/2.png';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <header className='bg-gray-200 dark:bg-black w-full'>
        <div className='mx-auto p-4'>
          <div className='flex items-center justify-between gap-4 lg:gap-10'>
            <div className='flex lg:w-0 lg:flex-1'>
              <Link to='/'>
                <div className='flex'>
                  <img
                    src={darkMode ? logodark : logoligth}
                    className='md:h-20 md:w-20 h-10 w-10'
                  />
                  <h1 className='font-bold md:text-3xl text-xs flex items-center ml-4 dark:text-white'>
                    NAHUEL ROTELA
                  </h1>
                </div>
              </Link>
            </div>
            <div class='flex flex-row gap-3 md:gap-12 pl-10   '>
              <a
                href='#'
                class='text-gray-800 rounded font-semibold hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-white'
              >
                Home
              </a>
              <a
                href='#'
                class='text-gray-800 rounded font-semibold hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-white'
              >
                About
              </a>
              <a
                href='#'
                class='text-gray-800 rounded font-semibold hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-white'
              >
                Skills
              </a>
              <a
                href='#'
                class='text-gray-800 rounded font-semibold hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-white'
              >
                Portfolio
              </a>
              <a
                href='#'
                class='text-gray-800 rounded font-semibold hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-white'
              >
                Contact
              </a>
              <button
                className='m-8 pt-2 pr-4 pb-2 pl-4 rounded border bg-gray-700 text-white dark:bg-white dark:text-gray-700'
                onClick={toggleDarkMode}
              ></button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
