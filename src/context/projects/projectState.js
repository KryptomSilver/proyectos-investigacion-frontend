import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { GET_PROJECTS } from "../../types/index";

const projectState = (props) => {
    const initialState = {
        projects: [],
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
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                getProjects,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default projectState;
