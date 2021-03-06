import React from "react";
import profile from "./Images/Profile.png";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Dafé.
            {" "}
            <br className="hidden lg:inline-block" />
            Full-Stack Software Engineer and Economics Graduate.
          </h1>
          <p className="mb-8 leading-relaxed">
            I enjoy building applications, and relish the opportunity to
            collaborate with others on projects.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="profile"
            src={profile}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
