import React, { useState, useEffect, useRef } from 'react';

const ContactForm = ({ darkMode, isTransitioning, toggleDarkMode }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(formRef.current);
    const response = await fetch(formRef.current.action, {
      method: formRef.current.method,
      body: form,
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.ok) {
      formRef.current.reset();
      alert('Gracias por contactarme');
    }
  };

  

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <div className={`relative flex items-top justify-center min-h-screen bg-gray-200 dark:bg-gray-900 sm:items-center sm:pt-0 transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className={`p-6  bg-gray-300 dark:bg-gray-800 rounded-t-lg sm:rounded-lg sm:rounded-r-none transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
                <h1 className={`text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
                  Get in touch
                </h1>
                <p className={`text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
                  Fill in the form to start a conversation
                </p>
                <div className={`flex items-center mt-8 text-gray-600 dark:text-gray-400 transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Pilar, Buenos Aires, Argentina
                  </div>
                </div>
                <div className={`flex items-center mt-4 text-gray-600 dark:text-gray-400 transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +54 9 1137670253
                  </div>
                </div>
                <div className={`flex items-center mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    nahuelmatiasrotela@gmail.com
                  </div>
                </div>
              </div>
              <form
                ref={formRef}
                className="p-6 flex flex-col justify-center bg-gray-100 dark:bg-gray-700 rounded-b-lg sm:rounded-lg sm:rounded-l-none"
                action="https://formspree.io/f/mnqkqlen"
                method="POST"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">Full Name</label>
                  <input type="name" name="name" id="name" placeholder="Full Name" className={` w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold  focus:outline-none transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`} />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">Email</label>
                  <input type="email" name="email" id="email" placeholder="Email" className={` w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold dark:text-gray-200  focus:outline-none transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`} />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">Message</label>
                  <textarea name="message" id="message" placeholder="Hello! I would like to hire you for my company" className={` w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold dark:text-gray-200  focus:outline-none transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`} rows="5" />
                </div>
                <button
                  type="submit"
                  className={` md:w-32 dark:bg-gray-800 bg-gray-800 hover:bg-blue-dark text-gray-200 font-bold py-3 px-6 rounded-lg mt-3 hover:bg-black hover:text-gray-200 dark:hover:bg-gray-400 dark:hover:text-gray-200  transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
