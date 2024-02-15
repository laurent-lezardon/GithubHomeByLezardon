import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Export({ closeModal }) {
  const projects = useSelector((store) => store.projectsReducer.list);
  console.log(projects);
  projects && console.log(JSON.stringify(projects));
  useEffect(() => {
    // Empecher le scroll lors de l'affichage de la modale
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  }, []);
  // Eviter le spam sur le bouton copy
  let runningAnimation = false;
  const handleCopy = (e) => {
    if (!runningAnimation) {
      runningAnimation = true;
      e.target.textContent = "Copied !";
      setTimeout(() => {
        runningAnimation = false;
        e.target.textContent = "Copy";
      }, 1000);
    }
    navigator.clipboard.writeText(JSON.stringify(projects));
  };

  return (
    <div
      onClick={closeModal}
      className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-w-[500px] max-w-[800px] relative rounded p-7 bg-gray-50"
      >
        <div className="absolute top-2 right-2 flex">
          <button
            onClick={handleCopy}
            className=" mr-2 py-1 px-8 font-semibold rounded text-xs text-white  bg-gradient-to-b from-lime-800 to-lime-600 border border-lime-600 shadow-inner shadow-blue-300"
          >
            Copy
          </button>
          <button
            onClick={closeModal}
            className=" py-1 px-3  flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700  rounded"
          >
            X
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-4">
          Corresponding myProjectsBdD.json content
        </h2>

        <p className="p-2 bg-slate-200 rounded text-sm mb-2">
          {projects && (
            <span className="font-semibold">{JSON.stringify(projects)}</span>
          )}
        </p>
      </div>
    </div>
  );
}
