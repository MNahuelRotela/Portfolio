import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import logoligth from '../assets/1.png';
import logodark from '../assets/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggleDarkMode = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      toggleDarkMode();
      setIsTransitioning(false);
    }, 500);
  };

  

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <header className={`bg-gray-200 h-28 dark:bg-gray-900 w-full transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}`}>
        <div className='mx-auto '>
          <div className='flex items-center justify-between gap-4 lg:gap-10'>
            <div className='flex lg:w-0 lg:flex-1 ml-4 md:ml-4'>
              <Link to='/'>
                <div className='flex'>
                  <img
                    src={darkMode ? logodark : logoligth}
                    className='md:h-20 md:w-20 h-10 w-10'
                  />
                  <h1 className=' font-bebas md:text-3xl ml-1 text-xs flex items-center md:ml-4 dark:text-white'>
                    NAHUEL ROTELA
                  </h1>
                </div>
              </Link>
            </div>
            <div className='flex flex-row gap-3 lg:gap-6 pl-10 p-8 items-center '>
              <a
                onClick={() => {
                  scroll.scrollToTop({
                    delay: 0,
                    duration:500,
                    smooth: true,
                    
                  });
                }}
                
                className='text-gray-800 rounded font-semibold font-bebas hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-gray-200 dark:hover:text-gray-400 cursor-pointer'
              >
                Home
              </a>
              <a
                href='#'
                className='text-gray-800 rounded font-semibold font-bebas hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-gray-200 dark:hover:text-gray-400 cursor-pointer'
              >
                About
              </a>
              <a
                href='#'
                className='text-gray-800 rounded font-semibold font-bebas  hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-gray-200 dark:hover:text-gray-400 cursor-pointer'
              >
                Skills
              </a>
              <a
                href='#'
                className='text-gray-800 rounded font-semibold font-bebas hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-gray-200 dark:hover:text-gray-400 cursor-pointer'
              >
                Portfolio
              </a>
              <ScrollLink to="contact-form" smooth={true} duration={500} className=' cursor-pointer' >
              <a
              
                className='text-gray-800 rounded font-semibold font-bebas hover:text-gray-600 hover:font-extrabold py-2 md:px-2 md:mx-2 text-xs md:text-lg dark:text-gray-200 dark:hover:text-gray-400 cursor-pointer'
              >
                Contact
              </a>
              </ScrollLink>
              <button
                className={` md:pt-2 md:pr-4 md:pb-2 md:pl-4 md:ml-24 px-1 rounded border bg-gray-700 text-white hover:bg-white shadow-lg dark:shadow-lg hover:text-black dark:bg-white dark:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-500 cursor-pointer ${isTransitioning ? 'ease-in-out' : ''}`}
                onClick={handleToggleDarkMode}
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className=' justify-center' />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
