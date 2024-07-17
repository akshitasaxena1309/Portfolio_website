import React from "react";
import { FaLinkedin, FaGithubSquare, FaMailBulk } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import profile from "../../public/Profile pic.png";
function Introduction() {
  return (
    <>
      <div
        name="Introduction"
        className="w-full h-auto mx-auto my-20 shadow-md mb-0 pb-8 md:pb-20 font-serif"
      >
        <div className="flex flex-col md:flex-row pb-10 ml-2 md:ml-0 md:mr-12">
          <div className="md:w-1/2 mt-24 md:mt-12 space-y-2 order-2  ">
            <div className="md:hover:scale-105 md:duration-1000">
              <span className="text-3xl flex justify-center md:justify-start">
                Hello, My name is Akshita
              </span>
              <div className="pt-3 flex space-x-1 text-4xl md:text-6xl justify-center md:justify-start font-normal">
                <h1>I'm a </h1>
                {/* <span className="text-gray-500 pl-2 pt-1 font-bold"> Coder</span> */}
                <ReactTyped
                  className="text-gray-600 pl-2 pt-1 font-bold"
                  strings={["Web Developer", "Coder", "Programmer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </div>
              <br />
              <p className="text-justify text-sm md:text-xl font-serif">
                a recent B.Tech graduate in Information Technology with
                expertise in designing both frontend and backend solutions. With
                a focus on creating intuitive user interfaces and robust system
                architectures, I am eager to contribute my skills and drive
                innovation within a dynamic team environment.
              </p>
              <br />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <div className="space-y-2">
                  <h1 className="text-2xl relative underline-on-hover py-1">
                    Available On
                  </h1>
                  <ul className="flex space-x-6 justify-center pt-2">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/akshita-saxena-1992bb20b"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/akshitasaxena1309"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaGithubSquare className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:akshitasaxena38@gmail.com">
                        <FaMailBulk className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl relative underline-on-hover py-1">
                  Currently Working On
                </h1>
                <ul className="flex space-x-5 justify-center pt-2">
                  <li>
                    <SiMongodb className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <SiExpress className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <RiReactjsLine className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <RiNodejsLine className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className=" flex mt-10 justify-center md:justify-start">
                <a
                  href="https://drive.google.com/file/d/1HNE8RhhK0iDoXpEpxxa8vmIBv20WRGS_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border text-xl text-gray-600 border-gray-600 font-extrabold py-2 px-8 rounded hover:bg-gray-600 hover:text-gray-300">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 md:mt-13 order-1 flex justify-center  sm:hover:scale-105 sm:duration-1000 md:hover:scale-100 md:duration-0 
       "
          >
            <img
              src={profile}
              alt="her"
              className="profile rounded-full md:w-[500px] md:h-[400px] w-[390px] h-[310px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
