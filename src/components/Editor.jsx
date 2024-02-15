import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addNewProject, updateProject } from "../features/projects";
import editIcon from "../assets/edit.svg";

export default function Editor() {
  // Global Init
  const projects = useSelector((store) => store.projectsReducer.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // Component Init
  const newProject = {
    id: undefined,
    title: "",
    imgUrl: [],
    description: "",
    techs: [],
    url: "",
    repository: "",
    bodyText: "",
    keyWords: [],
  };
  const [inputsProject, setInputsProject] = useState({ ...newProject });
  const [inputsProjectValidation, setinputsProjectValidation] = useState({
    title: false,
  });
  // init data pour projet existant
  useEffect(() => {
    if (id) {
      const projectToUpdate = projects.find((project) => project.id === id);
      console.log("project", projectToUpdate);
      setInputsProject({ ...projectToUpdate });
    }
  }, [id]);
  // Component functions
  const handleSubmitProject = (e) => {
    e.preventDefault();
    if (inputsProject.title) {
      console.log("every thing fine !", inputsProject);
      if (inputsProject.id) {
        console.log("update");
        dispatch(updateProject(inputsProject));
      } else {
        console.log("creation");
        dispatch(addNewProject(inputsProject));
      }
      setInputsProject({ ...newProject });

      setinputsProjectValidation({ title: false });
    } else {
      console.log("something gone wrong !");
      setinputsProjectValidation({ title: true });
    }
  };
  //console.log(inputsProjectValidation);

  return (
    <div className="text-slate-100 p-4 max-w-[600px] h-full mx-auto">
      <h2 className="text-xl text-center  mb-3">
        <span>ProjectEdit</span>
        <img className="inline-block w-6 h-6 ml-2" src={editIcon} alt="" />
      </h2>

      <form className="p-2 h-full">
        {/* Input Title */}
        <label className="">
          <span className="block text-sm font-semibold ">Title *</span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsProject({ ...inputsProject, title: e.target.value })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-3 ${
              !inputsProjectValidation.title
                ? "outline outline-none"
                : "outline outline-1 outline-[orangered] "
            }`}
            type="text"
            value={inputsProject.title}
          />
        </label>
        {/* description */}
        <label className="">
          <span className="block text-sm font-semibold ">Description</span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsProject({
                ...inputsProject,
                description: e.target.value,
              })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-3 `}
            type="text"
            value={inputsProject.description}
          />
        </label>
        {/* BodyText */}
        <label className="text-sm font-semibold" htmlFor="bodytext">
          Content
        </label>
        <textarea
          id="bodytext"
          spellCheck="false"
          onChange={(e) =>
            setInputsProject({ ...inputsProject, bodyText: e.target.value })
          }
          className={`w-full h-full rounded pl-2 text-slate-800 min-h-[200px] text-sm mb-3 `}
          type="text"
          value={inputsProject.bodyText}
        />
        {/* image URL */}
        <label className=" ">
          <span className=" text-sm font-semibold ">
            Images URL (separator = space)
          </span>
          <span className=" text-sm pl-4">(Public Folder /images/)</span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsProject({
                ...inputsProject,
                imgUrl: e.target.value.split(" "),
              })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-3 `}
            type="text"
            value={inputsProject.imgUrl.join(" ")}
          />
        </label>

        {/* Url */}
        <label className="">
          <span className="block text-sm font-semibold ">Url</span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsProject({ ...inputsProject, url: e.target.value })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-3 `}
            type="text"
            value={inputsProject.url}
          />
        </label>
        {/* Repository */}
        <label className="">
          <span className="block text-sm font-semibold">Repository</span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsProject({ ...inputsProject, repository: e.target.value })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-3 `}
            type="text"
            value={inputsProject.repository}
          />
        </label>
        {/* Key words */}
        <label className="">
          <span className="block text-sm font-semibold ">
            KeyWords (separator = space)
          </span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsProject({
                ...inputsProject,
                keyWords: e.target.value.split(" "),
              })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-3 `}
            type="text"
            value={inputsProject.keyWords.join(" ")}
          />
        </label>
        {/* Tags */}
        <label className="">
          <span className="block text-sm font-semibold ">
            Techs (separator = space)
          </span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsProject({
                ...inputsProject,
                techs: e.target.value.split(" "),
              })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-6  `}
            type="text"
            value={inputsProject.techs.join(" ")}
          />
        </label>
        <label htmlFor="bodytext"></label>

        <button
          type="submit"
          onClick={handleSubmitProject}
          className="px-4 py-2 text-sm rounded font-semibold bg-lime-700 w-full border border-lime-300"
        >
          Validate
        </button>
      </form>
    </div>
  );
}
