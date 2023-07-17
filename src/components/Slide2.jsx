import { Link } from "react-router-dom";
import nahuel from '../assets/nahuel.png';
import logoligth from '../assets/1.png';
import logodark from '../assets/2.png';
import hachidoglogo from "../assets/HachidogLogo.png"
import hachidog from "../assets/hachidogpage.png"

const Slide2 = () => {
  return (
    <div className="relative items-center justify-center w-full">
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="w-full pb-10 mx-auto text-center  ">
            <div className=" pt-2 justify-center flex">
                <Link to="/">
                  <span className="flex h-10 ">
                    <img className="h-8 justify-center" src={hachidoglogo} />
                    <h1 className="font-bold text-xl ml-1 dark:text-gray-200">Hachi Dog!</h1>
                  </span>
                </Link>
            </div>
        <h1 className="px-4 md:px-24 mb-2 text-xl font-semibold text-gray-900 dark:text-gray-200  ">
        Hachi Dog! It is a dog page inspired by the famous dog Hachiko where based on the slogan: "You don't find the dog, he finds you" we give you information about different dogs, breeds and the selected pack of the page.
            
        </h1>
        <div className="flex justify-center">
            <img src={hachidog} alt="Praveen Juge" className="flex justify-center w-[35rem] border dark:border-gray-600" />
        </div>
          <p className="text-lg font-medium text-[#101828] pt-4 dark:text-gray-200 font-bebas">Full Stack Developer</p>
          <p className="text-md font-medium text-[#667085] pt-2 dark:text-gray-400 mx-2 md:mx-48">On this website I did a full stack job creating the pages from scratch, managing the data from the Dogs API. <br/> TECH STACK: 
React.js, Redux, Express.js, Node.js, Sequelize, PostgreSQL, CSS Modules, GIT.</p>
        </div>
      </section>
    </div>
  );
};

export default Slide2;