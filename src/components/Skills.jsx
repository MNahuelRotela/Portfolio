import React from 'react';

import HTML from '../assets/html.svg';
import CSS from '../assets/css.svg';
import JavaScript from '../assets/javascript.svg';
import ReactImg from '../assets/react.svg';
import Redux from '../assets/redux.svg';
import GitHub from '../assets/github.svg';
import Git from '../assets/git.svg';
import Tailwind from "../assets/tailwind.svg";
import Styled from "../assets/styled.svg";
import Node from "../assets/nodejs.svg";
import Mongo from "../assets/mongo.svg";
import Postgre from "../assets/postgres.svg";
import Tremor from "../assets/tremor.svg";
import Figma from "../assets/figma.svg";
import Slack from "../assets/slack.svg";


const Skills = ({ darkMode, isTransitioning, toggleDarkMode }) => {
    return (
    <div name='skills' className={` w-full h-screen bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 ${isTransitioning ? 'ease-in-out' : ''}'`}>
        <div className="relative">
            <div class={`absolute top-72 rounded-full bg-orange-300 hover:opacity-70 -left-4 md:w-40 md:h-40 mix-blend-multiply dark:mix-blend-normal z-0 filter blur-xl opacity-40 animate-blob transition-opacity duration-500 hover:ease-in-out hover:duration-500 hover:transition-opacity ${isTransitioning ? 'ease-in-out' : ''}'`}></div>
        </div>

        <div className="relative">
            <div class={`absolute top-8 rounded-full bg-orange-300 hover:opacity-60 right-4 md:w-40 md:h-64 mix-blend-multiply dark:mix-blend-normal z-0 filter blur-xl opacity-30 animate-blob transition-opacity duration-500 hover:ease-in-out hover:duration-500 hover:transition-opacity ${isTransitioning ? 'ease-in-out' : ''}'`}></div>
        </div>

        <div className="relative">
            <div class={`absolute top-[40rem] rounded-full bg-orange-300 hover:opacity-60 right-96 md:w-24 md:h-32 mix-blend-multiply dark:mix-blend-normal z-0 filter blur-md opacity-30 animate-blob transition-opacity duration-500 hover:ease-in-out hover:duration-500 hover:transition-opacity ${isTransitioning ? 'ease-in-out' : ''}'`}></div>
        </div>

      {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col pt-8 w-full h-full z-10'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#fdbe7b]'>Hard Skills</p>
                <p className='pt-2'>Estas son las tecnologías en las que estoy trabajando/capacitandome.</p>
            </div>

            <div className='w-full grid grid-cols-5 sm:grid-cols-5 gap-4 text-center py-8'>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={HTML} alt="HTML" />
                    <p className='my-4 font-bebas'>HTML</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={CSS} alt="CSS" />
                    <p className='my-4 font-bebas'>CSS</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={JavaScript} alt="JavaScript" />
                    <p className='my-4 font-bebas'>JAVASCRIPT</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={ReactImg} alt="React" />
                    <p className='my-4 font-bebas'>REACT</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Redux} alt="Redux" />
                    <p className='my-4 font-bebas'>REDUX</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Node} alt="Nodejs" />
                    <p className='my-4 font-bebas'>NODE JS</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Tailwind} alt="Tailwind" />
                    <p className='my-4 font-bebas'>TAILWIND CSS</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Styled} alt="Styled components" />
                    <p className='my-4 font-bebas'>STYLED COMPONENTS</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Git} alt="Git" />
                    <p className='my-4 font-bebas'>GIT</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={GitHub} alt="GitHub" />
                    <p className='my-4 font-bebas'>GITHUB</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Postgre} alt="PostgreSQL" />
                    <p className='my-4 font-bebas'>POSTGRESQL</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Mongo} alt="MongoDB" />
                    <p className='my-4 font-bebas'>MONGODB</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-10' src={Tremor} alt="Tremor" />
                    <p className='my-3 font-bebas'>TREMOR</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Figma} alt="Figma" />
                    <p className='my-4 font-bebas'>FIGMA</p>
                </div>
                <div className='sm:shadow-lg  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Slack} alt="Slack" />
                    <p className='my-4 font-bebas'>SLACK</p>
                </div>

            </div>
            {/*<div>
                <p className='text-4xl font-bold inline border-b-4 border-[#a31621] '>Soft Skills</p>
                <p className='py-4'>Aprendizaje Rapido, Adaptación, Comunicación, Trabajo en Equipo, Creatividad, Gestión del Tiempo.</p>
            </div>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#a31621] '>Otros Datos</p>
                <p className='py-4'>Scrum, Trello, Slack, Inglés Básico.</p>
    </div>*/}
        </div>
        </div>
    );
};

export default Skills;