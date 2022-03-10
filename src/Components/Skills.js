import React from "react";
import { skills } from "../data";
import { TiTick } from "react-icons/ti";
import { BiBrain } from "react-icons/bi";
import { IconContext } from "react-icons";
const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <IconContext.Provider
          value={{ color: "grey", className: "projectsIcon", size: "5em" }}
        >
          <div className="flex justify-center items-center flex-wrap mx-4 h-16">
            <BiBrain />
          </div>
        </IconContext.Provider>
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 mt-5">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <TiTick className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
