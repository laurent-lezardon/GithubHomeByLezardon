import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  list: [
    // {
    //   id: nanoid(5),
    //   title: "first project",
    //   imgUrl: "mp3Tag.JPG",
    //   description: "projet de test",
    //   pointsOfInterest: "none",
    //   techs: ["js", "css", "html", "tailwind", "react", "vite"],
    //   url: "link",
    // },
  ],
};

const projectsSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    addProjectsFromApi: (state, action) => {
      console.log("addProjectsFromApi action", action.payload);
      state.list = action.payload;
    },
    addNewProject: (state, action) => {
      state.list.push({ ...action.payload, id: nanoid(5) });
    },
    updateProject: (state, action) => {
      console.log(action.payload);
      const indexToUpdate = state.list.findIndex((project) => {
        console.log(project.id, project.id === action.payload.id);
        return project.id === action.payload.id;
      });
      console.log(indexToUpdate);
      state.list[indexToUpdate] = { ...action.payload };
    },

    deleteProject: (state, action) => {
      state.list = state.list.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const getProjectsFromApi = (action) => (dispatch, getState) => {
  fetch("./datas/myProjectsBdD.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dispatch(addProjectsFromApi(data));
    })
    .catch(() => console.log("Erreur fetch"));
};

export default projectsSlice.reducer;
export const {
  addProjectsFromApi,
  addNewProject,
  updateProject,
  deleteProject,
} = projectsSlice.actions;
