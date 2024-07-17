import React from "react";
import c from "../../public/c.png";
import java from "../../public/java.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/javascript.png";
import express from "../../public/express.png";
import reacttjs from "../../public/reacttjs.png";
import mongodb from "../../public/mongodb.png";
import node from "../../public/node.png";
import bootstraplogo from "../../public/bootstraplogo.png";
import tailwind from "../../public/tailwind.png";
import dsa from "../../public/dsa.png";

function Skills() {
  const skillSet = [
    {
      id: 1,
      logo: c,
      text: "C Language",
    },
    {
      id: 2,
      logo: java,
      text: "Java",
    },
    {
      id: 3,
      logo: html,
      text: "HTML",
    },
    {
      id: 4,
      logo: css,
      text: "CSS",
    },
    {
      id: 5,
      logo: javascript,
      text: "JavaScript",
    },
    {
      id: 6,
      logo: express,
      text: "Express.js",
    },
    {
      id: 7,
      logo: reacttjs,
      text: "React.js",
    },
    {
      id: 8,
      logo: mongodb,
      text: "MongoDB",
    },
    {
      id: 9,
      logo: node,
      text: "Node.js",
    },
    {
      id: 10,
      logo: bootstraplogo,
      text: "Bootstrap",
    },
    {
      id: 11,
      logo: tailwind,
      text: "TailwndCSS",
    },
    {
      id: 12,
      logo: dsa,
      text: "DSA",
    },
  ];
  return (
    <>
      <div
        name="Skills"
        className="font-serif w-full h-auto mx-auto pt-10 shadow-md"
      >
        <div className="flex justify-center">
          <h1 className="text-gray-700 font-bold text-3xl md:text-4xl text-center px-4 py-2 relative underline-on-hover inline-block">
            My Skills
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 justify-items-center mt-14">
          {skillSet.map(({ id, logo, text }) => (
            <div
              className="flex flex-col items-center m-6 p-14 bg-white hover:bg-gray-400 duration-200 group"
              key={id}
            >
              <img className="w-20 md:w-36 h-auto" src={logo} alt="" />
              <p className="text-gray-700 text-2xl font-semibold text-center group-hover:text-gray-50">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
