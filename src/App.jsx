import Cards from "./components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { addProjectsFromApi, getProjectsFromApi } from "./features/projects";

import Editor from "./components/Editor";
import MyHeader from "./components/MyHeader";

import ProjectDisplay from "./components/ProjectDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  dispatch(getProjectsFromApi());
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/edit" element={<Editor />} />
          <Route path="/edit/:id" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
