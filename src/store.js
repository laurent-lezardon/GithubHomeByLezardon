import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./features/projects";

export const store = configureStore({ reducer: { projectsReducer } });
