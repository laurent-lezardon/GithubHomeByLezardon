import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function Card() {
  const projects = useSelector((store) => store.projectsReducer.list);

  console.log(projects);
  return projects.map((project) => {
    return (
      <Link
        className="block w-full h-full px-2 py-1 text-sm text-slate-800 "
        to={`/project/${project.id}`}
      >
        <div
          key={project.id}
          className="shadow-lg rounded h-48  bg-slate-50 flex p-2 "
        >
          <img
            className=" block w-1/3   object-contain  rounded-t"
            src={`../public/images/${project.imgUrl[0]}`}
            alt="project image"
          ></img>
          <div className="pl-4  flex flex-col justify-between ">
            <div className="">
              <p className="font-bold text-lime-900 mb-2">{project.title}</p>
              <p className="text-xs mb-2">{project.description}</p>
              <ul className="flex flex-wrap gap-1 mb-2">
                {project.keyWords.map((keyWord, index) => (
                  <li
                    key={`${project.id}-${index}`}
                    className="text-xs px-2 py-0 rounded font-semibold bg-lime-400 border border-slate-300"
                  >
                    {keyWord}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1 mb-2">
                {project.techs.map((tech, index) => (
                  <li
                    key={`${project.id}-${index}`}
                    className="text-xs px-2 py-0 rounded font-semibold bg-lime-200 border border-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="block text-xs w-[150px]  text-slate-50 bg-lime-700 rounded border border-lime-300 text-center py-[2px]"
              target="_blank"
              href={project.url}
            >
              Have a look !
            </a>
          </div>
        </div>
      </Link>
    );
  });
}
