import React from "react";
import schoolLogo from "../../public/logo-school.png";
import collegeLogo from "../../public/logo-college.png";
function Academic() {
  return (
    <>
      <div
        name="Academic"
        className="w-full font-serif h-auto mx-auto bg-gray-600 mb-0 md:pl-20 pl-2 shadow-md pb-20"
      >
        <div className="flex justify-center">
          <h1 className="text-gray-100 font-bold text-4xl text-center pt-8 relative underline-on-hover-for-dark inline-block px-4 py-2">
            Academic Details
          </h1>
        </div>
        <div className="flex md:flex-row flex-col pt-20 ">
          <div className="md:w-1/2 md:hover:scale-105 md:duration-1000">
            <div className="flex flex-col ml-10">
              <h1 className=" text-3xl md:text-4xl pb-3 text-gray-200 font-semibold">
                Bachelor of Technology (B.Tech)
              </h1>
              <div className="text-xl md:text-2xl text-gray-300">
                <div className="flex flex-row">
                  <pre>- </pre>
                  <p>
                    M.L.V Textile & Engineering College, Bhilwara, Rajasthan
                  </p>
                </div>
                <div className="flex flex-row">
                  <pre>- </pre>
                  <p>Information Technology (9.5 SGPA)</p>
                </div>
                <div className="flex flex-row">
                  <pre>- </pre>
                  <p> July-2020 - May-2024</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="md:w-1/2 md:ml-48 md:mt-13 order-1 md:order-2 flex justify-center pt-9 md:pt-0 
           "
          >
            <img
              src={collegeLogo}
              alt="College-Logo"
              className="md:hover:scale-105 md:duration-1000 rounded-full md:w-[200px] md:h-[200px] w-[200px] h-[200px] logo"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col pt-20 ">
          <div className="md:w-1/2 md:hover:scale-105 md:duration-1000">
            <div className="flex flex-col ml-10 pb-3">
              <h1 className="text-3xl md:text-4xl pb-3 text-gray-200 font-semibold">
                Senior Secondary Education (12<sup>th</sup> Class)
              </h1>
              <div className="text-xl md:text-2xl text-gray-300">
                <div className="flex flex-row">
                  <pre>- </pre>
                  <p>
                    M.L.V Mahila Ashram Sr. Sec. School, Bhilwara, Rajasthan
                  </p>
                </div>
                <div className="flex flex-row">
                  <pre>- </pre>
                  <p>Science & Maths (83.60%)</p>
                </div>
                <div className="flex flex-row">
                  <pre>- </pre>
                  <p> July-2019 - June-2020</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="md:w-1/2 md:ml-48 md:mt-13 order-1 md:order-2 flex justify-center pt-9 md:pt-0 
           "
          >
            <img
              src={schoolLogo}
              alt="her"
              className="md:hover:scale-105 md:duration-1000 rounded-full md:w-[200px] md:h-[200px] w-[200px] h-[200px] logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Academic;
