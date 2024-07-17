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
        <div className="font-sans pt-12 text-gray-300 flex flex-col text-xl md:text-3xl items-center">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row px-16">
              <FaMobileAlt />
              <pre className="font-serif"> 9571462508</pre>
            </div>
            <div className="flex flex-row">
              <FaMailBulk />
              <pre className="font-serif"> akshitasaxena38@gmail.com</pre>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row px-16">
              <FaGithubSquare />

              <a
                href="https://github.com/akshitasaxena1309"
                target="_blank"
                rel="noopener noreferrer"
              >
                <pre className="font-serif"> github.com/akshitasaxena1309</pre>
              </a>
            </div>
            <div className="flex flex-row">
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
        </div>
      </div>
    </>
  );
}

export default Contact;
