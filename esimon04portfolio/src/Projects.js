// src/Projects.js
import React from "react";
import { projects } from "./data/Data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Games I've made
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative" style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
                <img
                  alt="rythmRunnerPicture"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}