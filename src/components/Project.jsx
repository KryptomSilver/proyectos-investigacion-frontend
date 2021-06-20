import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";

const Project = ({ project, eliminar }) => {
    //usestate para maestros
    const [teachers, setTeachers] = useState([]);
    const [careers, setCareers] = useState([]);
    useEffect(() => {
        const getTeachers = async () => {
            const url = `http://localhost:4000/api/teachers/all`;
            const teachers = await clienteAxios.get(url);
            setTeachers(teachers.data);
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
        <tr>
            <td className="text-center">{project.nom_proyecto}</td>
            <td className="text-center">
                {teachers.map((teacher) =>
                    project.lider === teacher._id ? teacher.nombre : null
                )}
            </td>
            <td className="text-center">{project.tipo_financiamiento}</td>

            <td className="text-center">
                {careers.map((career) =>
                    project.programa === career._id ? career.nombre : null
                )}
            </td>

            <td className="text-center">
                {moment(project.fecha_inicio).format("YYYY/MM/DD")}
            </td>
            <td className="text-center">
                {moment(project.fecha_fin).format("YYYY/MM/DD")}
            </td>
            <td className="d-flex align-items-center justify-content-evenly">
                <Link
                    to={{
                        pathname: "/projectedit",
                        state: { id: project._id },
                    }}
                    className="btn btn-success btn-sm d-flex align-items-center"
                >
                    <span className="material-icons me-1">&#xe3c9;</span>
                    Editar
                </Link>
                <button
                    onClick={() => eliminar(project._id)}
                    className="btn btn-danger btn-sm d-flex align-items-center"
                >
                    <span className="material-icons me-1">&#xe872;</span>
                    Eliminar
                </button>
                <Link
                    to={{
                        pathname: "/projectsee",
                        state: { id: project._id },
                    }}
                    className="btn btn-info btn-sm d-flex align-items-center text-white"
                >
                    <span className="material-icons me-1">&#xe8f4;</span>
                    Ver
                </Link>
            </td>
        </tr>
    );
};

export default Project;
