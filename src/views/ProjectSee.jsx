import React, { Fragment, useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Nav from "../components/Nav";
import FormProject from "../components/FormProject";

const ProjectSee = (props) => {
    const id = props.location.state.id;
    //state para el proyecto
    const [project, setProject] = useState({
        lider: "",
        nom_proyecto: "",
        tipo_financiamiento: "",
        programa: "",
        fecha_inicio: "",
        fecha_fin: "",
        no_participantes: 0,
    });
    //Extraer dadtos de el proyecto
    const {
        lider,
        nom_proyecto,
        tipo_financiamiento,
        programa,
        fecha_inicio,
        fecha_fin,
        no_participantes,
    } = project;
    useEffect(() => {
        const consultarProject = async () => {
            const url = `http://localhost:4000/api/projects/${id}`;
            const project = await clienteAxios.get(url);
            const {
                lider,
                nom_proyecto,
                tipo_financiamiento,
                programa,
                fecha_inicio,
                fecha_fin,
                no_participantes,
            } = project.data;
            setProject({
                lider,
                nom_proyecto,
                tipo_financiamiento,
                programa,
                fecha_inicio,
                fecha_fin,
                no_participantes,
            });
        };
        consultarProject();
    }, [id]);
    //usestate para maestros
    const [teachers, setTeachers] = useState([]);
    const [careers, setCareers] = useState([]);
    useEffect(() => {
        const getTeachers = async () => {
            const url = `http://localhost:4000/api/teachers/all`;
            const teachers = await clienteAxios.get(url);
            setTeachers(teachers.data);
            console.log(teachers.data);
        };
        const getCareers = async () => {
            const url = `http://localhost:4000/api/careers/all`;
            const careers = await clienteAxios.get(url);
            setCareers(careers.data);
        };
        getTeachers();
        getCareers();
    }, []);
    return (
        <Fragment>
            <Nav />
            <FormProject
                key="skdflswjgeflwjgelfg2"
                title="Editar Proyecto"
                nom_proyecto={nom_proyecto}
                lider={lider}
                teachers={teachers}
                tipo_financiamiento={tipo_financiamiento}
                programa={programa}
                fecha_inicio={fecha_inicio}
                fecha_fin={fecha_fin}
                no_participantes={no_participantes}
                disabled={true}
                careers={careers}
            />
        </Fragment>
    );
};

export default ProjectSee;
