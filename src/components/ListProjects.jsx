import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AlertsSuccess } from "./alerts";
import Nav from "./Nav";
import Project from "./Project";
const ListProjects = () => {
    //state para los proyectos
    const [projects, setProjects] = useState([]);
    //state para modal eliminar
    const [alerteliminar, setAlerteliminar] = useState(true);
    //state para la pagina actual
    const [paginaactual, setPaginaactual] = useState(1);
    //state para el total de paginas
    const [totalpaginas, setTotalpaginas] = useState(1);

    //Consultar api
    useEffect(() => {
        const consultAPI = async () => {
            const projectsPagina = 5;
            const url = `http://localhost:4000/api/projects?&page=${
                paginaactual - 1
            }&size=${projectsPagina}`;
            const projects = await axios.get(url);
            const calcularPaginas = Math.ceil(
                projects.data.totalDocs / projectsPagina
            );
            setTotalpaginas(calcularPaginas);
            setProjects(projects.data.docs);
        };
        consultAPI();
    }, [alerteliminar, paginaactual]);
    //funcion para la pagina anterior
    const paginaAnterior = () => {
        const nuevaPaginaActual = paginaactual - 1;
        if (nuevaPaginaActual === 0) return;
        setPaginaactual(nuevaPaginaActual);
    };
    const paginaSiguiente = () => {
        const nuevaPaginaActual = paginaactual + 1;
        if (nuevaPaginaActual > totalpaginas) return;
        setPaginaactual(nuevaPaginaActual);
    };
    //Funcion para modal eliminar
    const eliminar = (id) => {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "Estos datos se perderan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!",
        }).then((result) => {
            if (result.isConfirmed) {
                const eliminarAPI = async () => {
                    const url = `http://localhost:4000/api/projects/${id}`;
                    const respuesta = await axios.delete(url);
                    if (respuesta.status === 200) {
                        AlertsSuccess(respuesta.data.message);
                    }
                    setAlerteliminar(true);
                };
                setAlerteliminar(false);
                eliminarAPI();
            } else {
            }
        });
    };
    return (
        <Fragment>
            <Nav />
            <div className="container">
                <h1 className="text-center mt-2">Proyectos</h1>
                <div className="d-flex align-items-center justify-content-end mt-3">
                    <Link to="/projectform" className="btn btn-dark">
                        Agregar
                    </Link>
                </div>
                <div className="table-responsive">
                    <table
                        className="table table-bordered mt-4"
                        style={{ fontSize: ".8rem" }}
                    >
                        <thead className="table-dark">
                            <tr>
                                <th className="text-center">Nombre proyecto</th>
                                <th className="text-center">Lider</th>
                                <th className="text-center">
                                    Tipo financiamiento
                                </th>
                                <th className="text-center">Programa</th>
                                <th className="text-center">Fecha inicio</th>
                                <th className="text-center">Fecha fin</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {projects.map((project) => (
                                <Project
                                    key={project._id}
                                    project={project}
                                    eliminar={eliminar}
                                />
                            ))}
                        </tbody>
                    </table>
                    <nav className="d-flex justify-content-end pe-1">
                        <ul className="pagination ">
                            <li className="page-item">
                                {paginaactual === 1 ? null : (
                                    <button
                                        onClick={paginaAnterior}
                                        className="page-link"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                )}
                            </li>
                            <li className="page-item disabled">
                                <button className="page-link " disabled>
                                    ...
                                </button>
                            </li>

                            <li className="page-item">
                                {paginaactual === totalpaginas ? (
                                    <button
                                        onClick={paginaSiguiente}
                                        className="page-link"
                                        href="#"
                                        aria-label="Next"
                                    >
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
                                ) : null}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
};

export default ListProjects;
