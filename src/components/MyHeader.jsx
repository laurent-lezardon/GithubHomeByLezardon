import editIcon from "../assets/edit.svg";
import folderIcon from "../assets/folder.svg";
import { Link } from "react-router-dom";
import { FileUp } from "lucide-react";
import { createPortal } from "react-dom";
import { useState } from "react";
import Export from "./Export";

export default function MyHeader() {
  const [showExportModal, setShowExportModal] = useState(false);
  const toggleModal = () => {
    setShowExportModal(!showExportModal);
  };
  return (
    <header className="flex border-b border-slate-400 justify-between items-center px-4 max-w-[800px] mx-auto 2xl:max-w-[1200px]">
      <div className="p-4 ">
        <h1 className="text-slate-100 text-xl">MyProjects</h1>
        <p className="text-sm text-[orangered] ml-12 font-semibold">
          By Lezardon
        </p>
      </div>

      <nav className="flex ">
        <Link to="/edit">
          <img className="w-10 h-10 mr-4" src={editIcon} alt="" />
        </Link>
        <Link to="/">
          <img className="w-10 h-10 mr-4" src={folderIcon} alt="" />
        </Link>
        <FileUp
          color="orangered"
          className="w-10 h-10"
          strokeWidth={1.2}
          onClick={toggleModal}
        />
      </nav>
      {showExportModal &&
        createPortal(<Export closeModal={toggleModal} />, document.body)}
    </header>
  );
}
