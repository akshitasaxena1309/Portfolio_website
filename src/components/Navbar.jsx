import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  const [isNavDialogOpen, setIsNavDialogOpen] = useState(false);

  const handleMenu = () => {
    setIsNavDialogOpen(!isNavDialogOpen);
  };
  const closeMenu = () => {
    setIsNavDialogOpen(false); // Close the navigation dialog
  };
  return (
    <>
      <div className=" font-serif z-50 w-full h-28 flex justify-between items-center px-4 md:px-5 shadow-xl bg-gray-600">
        <div className="text-3xl text-gray-100 font-semibold ">
          Akshita's Portfolio
        </div>
        <ul className="md:flex text-gray-200 text-2xl font-normal hidden ">
          <li className="mx-[10px] cursor-pointer ">
            <Link
              to="/"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <Link
              to="Academic"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Education
            </Link>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <Link
              to="Skills"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Skills
            </Link>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <Link
              to="Project"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Projects
            </Link>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <Link
              to="OtherProject"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Other Projects
            </Link>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={handleMenu} className="text-4xl">
            &#8801;
          </button>
        </div>

        <div
          id="nav-dialog"
          className={`${
            isNavDialogOpen ? "" : "hidden"
          } fixed inset-0 bg-gray-300 z-50`}
        >
          <div
            id="nav-bar"
            className="w-full h-28 shadow-md flex justify-between items-center px-4 bg-gray-600"
          >
            <div className="text-2xl text-white font-bold">
              Akshita's Portfolio
            </div>
            <div className="md:hidden">
              <button onClick={handleMenu} className="text-2xl">
                &#x2715;
              </button>
            </div>
          </div>
          <div className="text-gray-700 mt-6 flex flex-col">
            <Link
              className="text-2xl font-medium m-3 p-3 hover:bg-indigo-50 rounded-lg cursor-pointer"
              to="Introduction"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className="text-2xl font-medium m-3 p-3 hover:bg-indigo-50 rounded-lg cursor-pointer"
              to="Academic"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Education
            </Link>
            <Link
              className="text-2xl font-medium m-3 p-3 hover:bg-indigo-50 rounded-lg cursor-pointer"
              to="Skills"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link
              className="text-2xl font-medium m-3 p-3 hover:bg-indigo-50 rounded-lg cursor-pointer"
              to="Project"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              className="text-2xl font-medium m-3 p-3 hover:bg-indigo-50 rounded-lg cursor-pointer"
              to="OtherProject"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Other Projects
            </Link>
            <Link
              className="text-2xl font-medium m-3 p-3 hover:bg-indigo-50 rounded-lg cursor-pointer"
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
