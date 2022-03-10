import React from "react";
import { projects } from "../data";
import { IconContext } from "react-icons";
import { DiCode } from "react-icons/di";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <IconContext.Provider
        value={{ color: "grey", className: "projectsIcon", size: "5em" }}
      >
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex justify-center items-center flex-wrap mx-4 h-16">
            <DiCode />
          </div>
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                I’m always looking for something new to learn or a new problem to solve. I’m excited to pursue a career in technology where I can challenge myself this way and further my programming knowledge!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                rel="noopener noreferrer"
                target="_blank"
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </IconContext.Provider>
    </section>
  );
};

export default Projects;
