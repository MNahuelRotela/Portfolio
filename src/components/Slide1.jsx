import { Link } from "react-router-dom";
import nahuel from '../assets/nahuel.png';
import logoligth from '../assets/1.png';
import logodark from '../assets/2.png';
import codetutorlogo from "../assets/IconCodeTutor.svg"
import codetutor from "../assets/code-tutor.png"



const Slide1 = () => {
  return (
    <div className="relative items-center justify-center w-full">
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="w-full pb-10 mx-auto text-center  ">
            <div className=" pt-2 justify-center flex">
                <Link to="/">
                  <span className="flex h-10 ">
                    <img className="h-8 justify-center" src={codetutorlogo} />
                    <h1 className="font-bold text-xl ml-1 dark:text-gray-200">Code-Tutor.</h1>
                  </span>
                </Link>
            </div>
        <h1 className=" px-4 md:px-24 mb-2 text-xl font-semibold text-gray-900 dark:text-gray-200 ">
        Code-Tutor is an online platform aimed at people from Latin America that serves to connect users with tutors for programming projects independently.
            
        </h1>
        
        <div className="flex justify-center">
            <img src={codetutor} alt="Praveen Juge" className="flex justify-center w-[35rem] border dark:border-gray-600" />
        </div>
          <p className="text-lg font-medium text-[#101828] dark:text-gray-200 pt-4 font-bebas">Front-end Developer</p>
          <p className="text-md font-medium text-[#667085] dark:text-gray-400 pt-2 mx-2 md:mx-48">In this platform located in Canada, I dedicated myself to the Development and participation in the creation of the platform from scratch. 
 I Performed for the most part on the Front in a development team with Scrum methodologies. Management of statistics and graphs, etc.</p>
        </div>
      </section>
    </div>
  );
};

export default Slide1;