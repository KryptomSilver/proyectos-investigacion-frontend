import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {  GET_PROJECTS } from "../../types/index";

const projectState = (props) => {
    const initialState = {
        projects: [],
        project:[]
    };
    const [state, dispatch] = useReducer(projectReducer, initialState);
    // Obtener proyectos
    const getProjects = async (currentPage, projectsPage) => {
        const url = `http://localhost:4000/api/projects?&page=${
            currentPage - 1
        }&size=${projectsPage}`;
        const projects = await clienteAxios.get(url);
        // Calcular las paginas
        const calPages = Math.ceil(projects.data.totalDocs / projectsPage);
        dispatch({
            type: GET_PROJECTS,
            payload: projects.data.docs,
        });
        return calPages;
    };
    // Eliminar proyecto
    const deleteProject = async (id) => {
        const url = `http://localhost:4000/api/projects/${id}`;
        const response = await clienteAxios.delete(url);
        return response;
    };
    // Obtener proyecto
    const getProject = async (id) => {
        const url = `http://localhost:4000/api/projects/${id}`;
        const project = await clienteAxios.get(url);
        return project;
    };
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                getProjects,
                getProject,
                deleteProject,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default projectState;
