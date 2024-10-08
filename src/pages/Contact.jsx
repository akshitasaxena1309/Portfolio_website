import React from "react";

import { FaGithubSquare, FaMobileAlt, FaMailBulk } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
function Contact() {
  return (
    <>
      <div
        name="contact"
        className="font-serif w-full h-auto mx-auto bg-gray-600 mb-0 shadow-md pb-20"
      >
        <div className="flex justify-center">
          <h1 className="text-gray-100 font-bold text-4xl text-center pt-8 relative underline-on-hover-for-dark inline-block px-4 py-2">
            Contact
          </h1>
        </div>
        <div className="font-sans text-base md:text-2xl text-gray-300 flex flex-col items-center pt-10 gap-1">
          <div className="flex flex-row items-center md:hover:scale-105 md:duration-1000">
            <FaMobileAlt />
            <pre className="font-serif"> 9571462508</pre>
          </div>
          <div className="flex flex-row items-center md:hover:scale-105 md:duration-1000">
            <FaMailBulk />
            <pre className="font-serif"> akshitasaxena38@gmail.com</pre>
          </div>
          <div className="flex flex-row items-center md:hover:scale-105 md:duration-1000">
            <FaGithubSquare />

            <a
              href="https://github.com/akshitasaxena1309"
              target="_blank"
              rel="noopener noreferrer"
            >
              <pre className="font-serif"> github.com/akshitasaxena1309</pre>
            </a>
          </div>
          <div className="flex flex-row items-center md:hover:scale-105 md:duration-1000">
            <IoLogoLinkedin />
            <a
              href="https://www.linkedin.com/in/akshita-saxena-1992bb20b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <pre className="font-serif">
                {" "}
                linkedin.com/in/akshita-saxena-1992bb20b
              </pre>
            </a>
          </div>
        </div>
        {/* <div className="font-sans pt-12 text-gray-300 flex flex-col text-base md:text-2xl items-end">
          <div className="flex flex-col">
            <div className="flex flex-row px-16 md:hover:scale-105 md:duration-1000">
              <FaMobileAlt />
              <pre className="font-serif"> 9571462508</pre>
            </div>
            <div className="flex flex-row md:hover:scale-105 md:duration-1000">
              <FaMailBulk />
              <pre className="font-serif"> akshitasaxena38@gmail.com</pre>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row px-16 md:hover:scale-105 md:duration-1000">
              <FaGithubSquare />

              <a
                href="https://github.com/akshitasaxena1309"
                target="_blank"
                rel="noopener noreferrer"
              >
                <pre className="font-serif"> github.com/akshitasaxena1309</pre>
              </a>
            </div>
            <div className="flex flex-row text-xs md:hover:scale-105 md:duration-1000">
              <IoLogoLinkedin />
              <a
                href="https://www.linkedin.com/in/akshita-saxena-1992bb20b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <pre className="font-serif">
                  {" "}
                  linkedin.com/in/akshita-saxena-1992bb20b
                </pre>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Contact;
