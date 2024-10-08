import React from "react";
import { useParams } from "react-router-dom";
function Project() {
  return (
    <>
      <div
        name="Project"
        className="font-serif w-full h-auto mx-auto bg-gray-600 mb-0 shadow-md pb-20"
      >
        <div className="flex justify-center">
          <h1 className="text-gray-100 font-bold text-3xl md:text-4xl text-center pt-8 relative underline-on-hover-for-dark inline-block px-4 py-2">
            My Main Projects
          </h1>
        </div>
        <div
          className="flex
        flex-col md:flex-row pt-20 md:pl-20 pl-2"
        >
          <div className="md:w-1/2 ml-2 ">
            <div className="flex justify-center md:justify-start">
              <h1 className=" text-2xl md:text-4xl pb-2 relative underline-on-hover-for-dark  flex justify-center md:justify-start text-gray-200 font-semibold">
                Multi-Level Marketing Website (MLM)
              </h1>
            </div>
            <div className="text:xl md:text-2xl text-gray-300 pt-9">
              <div className="flex flex-row ">
                <pre>- </pre>
                <p>
                  Contribute to the development of a fully functional Multilevel
                  Marketing (MLM) website with admin, user, and seller panels.
                </p>
              </div>
              <div className="flex flex-row">
                <pre>- </pre>
                <p>
                  <span className="font-bold pr-2">My Role -</span>
                  Specialized in API integration and authentication, ensuring
                  smooth communication between different panels and robust
                  security measures to safeguard user data and transactions.
                </p>
              </div>
              <div className="flex flex-row">
                <pre>- </pre>
                <p>
                  Collaborate within a team to implement project requirements
                  and achieve successful deployment of the MLM website.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {" "}
              <div className="flex justify-center">
                <h1 className="text-xl relative underline-on-hover-for-dark pb-2 md:text-2xl  pt-10 md:pt-0 text-gray-200 font-semibold text-center">
                  (Technology Stack)
                </h1>
              </div>
              <div className="text-xl pt-3 md:text-2xl text-gray-300 text-center">
                <p>HTML, CSS, JavaScript, Bootstrap</p>
                <p>Express.js, MongoDB, REST API</p>
                <p>JSON Web Token</p>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <a
                href="https://mlm-project-tawny.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-300 text-gray-300 font-bold py-2 px-6 rounded hover:bg-gray-300 hover:text-gray-700">
                  Click Here
                </button>
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-14 shadow-xl" />
        <div
          className="flex
        flex-col md:flex-row pt-20 md:pl-20 pl-2"
        >
          <div className="md:w-1/2 ml-2">
            <div className="flex justify-center md:justify-start">
              <h1 className="text-2xl md:text-4xl relative underline-on-hover-for-dark pb-2 flex justify-center md:justify-start text-gray-200 font-semibold">
                Flick-List
              </h1>
            </div>
            <div className="text-xl md:text-2xl pt-3 text-gray-300">
              <div className="flex flex-row ">
                <pre>- </pre>
                <p>Design and develop a movie management web application.</p>
              </div>
              <div className="flex flex-row">
                <pre>- </pre>
                <p>
                  Enable users to create accounts and manage personal movie
                  lists.
                </p>
              </div>
              <div className="flex flex-row">
                <pre>- </pre>
                <p>
                  Implement secure authentication and authorization using JSON
                  Web Tokens (JWT).
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex justify-center">
                <h1 className="text-xl relative underline-on-hover-for-dark pb-2 md:text-2xl  pt-10 md:pt-0 text-gray-200 font-semibold text-center">
                  (Technology Stack)
                </h1>
              </div>
              <div className="text-xl md:text-2xl pt-3 text-gray-300 text-center">
                <p>HTML, CSS, JavaScript, Bootstrap</p>
                <p>Express.js, MongoDB, REST API</p>
                <p>JSON Web Token</p>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <a
                href="https://movie-website-one-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-300 text-gray-300 font-bold py-2 px-6 rounded hover:bg-gray-300 hover:text-gray-700">
                  Click Here
                </button>
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-14 shadow-xl" />
        <div
          className="flex
        flex-col md:flex-row pt-20 md:pl-20 pl-2"
        >
          <div className="md:w-1/2 ml-2">
            <div className="flex justify-center md:justify-start">
              {" "}
              <h1 className="text-2xl md:text-4xl pb-2 flex relative underline-on-hover-for-dark justify-center md:justify-start text-gray-200 font-semibold">
                Password Manager
              </h1>
            </div>
            <div className="text-xl md:text-2xl pt-3 text-gray-300">
              <div className="flex flex-row ">
                <pre>- </pre>
                <p>
                  Developed a secure password manager using MERN stack, enabling
                  users to create and manage accounts
                </p>
              </div>
              <div className="flex flex-row">
                <pre>- </pre>
                <p>
                  Implemented authentication, allowing users to securely save
                  and retrieve website names, usernames, and passwords.
                </p>
              </div>
              <div className="flex flex-row">
                <pre>- </pre>
                <p>
                  Styled the application with TailwindCSS, ensuring a
                  responsive, modern, and user-friendly interface.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex justify-center">
                <h1 className="text-xl relative underline-on-hover-for-dark pb-2 md:text-2xl  pt-10 md:pt-0 text-gray-200 font-semibold text-center">
                  (Technology Stack)
                </h1>
              </div>
              <div className="text-xl pt-3 md:text-2xl text-gray-300 text-center">
                <p> </p>
                <p>React.js, Express.js, REST API</p>
                <p>TailwindCSS, MongoDB</p>
                <p>JSON Web Token</p>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <a
                href="https://password-manager-kappa-lilac.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-300 text-gray-300 font-bold py-2 px-6 rounded hover:bg-gray-300 hover:text-gray-700">
                  Click Here
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
