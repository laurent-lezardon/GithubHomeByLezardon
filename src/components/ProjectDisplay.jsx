import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProject } from "../features/projects";

export default function ProjectDisplay() {
  const projects = useSelector((store) => store.projectsReducer.list);
  console.log(projects);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("id", id);
  const project = projects?.find((project) => project.id === id);
  console.log(project);
  return (
    <div className="text-slate-100 p-4 max-w-[800px] mx-auto ">
      <div className="flex justify-end">
        <Link
          to={`/edit/${id}`}
          className="px-4 py-1 text-sm bg-lime-600 rounded font-semibold hover:bg-lime-700 mr-2"
        >
          Update
        </Link>
        <button
          onClick={() => {
            dispatch(deleteProject(id));
            navigate("/");
          }}
          className="inline-block px-4 py-1 text-sm bg-[orangered] rounded font-semibold hover:bg-red-700"
        >
          Delete
        </button>
      </div>
      <p className="text-xl mb-4">{project.title}</p>
      <p className="text-base mb-4">{project.description}</p>
      <div className="grid gap-2 grid-cols-3 p-2 bg-slate-200 rounded mb-6">
        {project.imgUrl.map((img) => (
          <img
            className=" block h-[400px]  object-cover  rounded-t"
            src={`/images/${img}`}
            alt="mp3Tag"
          ></img>
        ))}
      </div>
      <div className="text-base text-white mb-6 border border-slate-200 rounded p-2">
        <p className="">{project.bodyText}</p>
      </div>

      <ul className="text-xs flex flex-wrap gap-1 mb-6">
        {project.keyWords.map((keyWord, index) => (
          <li
            key={`kw-${project.id}-${index}`}
            className="text-xs text-slate-800 px-2  rounded font-semibold bg-lime-400 border border-slate-600 "
          >
            {keyWord}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-1 mb-6">
        {project.techs.map((tech, index) => (
          <li
            key={`tech-${project.id}-${index}`}
            className="text-xs text-slate-800 px-2  rounded font-semibold bg-lime-200 border border-slate-300 "
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        className="block py-1      rounded bg-lime-700 w-full border border-lime-300 pl-2 mb-4 "
        target="_blank"
        href={project.url}
      >
        Demo : {project.url}
      </a>
      <a
        className="block py-1  text-slate-50  rounded  bg-blue-600 border border-lime-300 pl-2"
        target="_blank"
        href={project.repository}
      >
        Repository : {project.repository}
      </a>
    </div>
  );
}
