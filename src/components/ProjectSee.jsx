import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const ProjectSee = (props) => {
    const id = props.location.state.id;
    //state para el proyecto
    const [project, setProject] = useState({
        lider: "",
        nom_proyecto: "",
        tipo_finanzamiento: "",
        programa: "",
        fecha_inicio: "",
        fecha_fin: "",
        no_participantes: 0,
    });
    //Extraer dadtos de el proyecto
    const {
        lider,
        nom_proyecto,
        tipo_finanzamiento,
        programa,
        fecha_inicio,
        fecha_fin,
        no_participantes,
    } = project;
    useEffect(() => {
        const consultarProject = async () => {
            const url = `http://localhost:4000/api/projects/${id}`;
            const project = await axios.get(url);
            const {
                lider,
                nom_proyecto,
                tipo_finanzamiento,
                programa,
                fecha_inicio,
                fecha_fin,
                no_participantes,
            } = project.data;
            setProject({
                lider,
                nom_proyecto,
                tipo_finanzamiento,
                programa,
                fecha_inicio,
                fecha_fin,
                no_participantes,
            });
        };
        consultarProject();
    }, [id]);
    return (
        <Fragment>
            <Nav />
            <form noValidate className="needs-validation">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-center">
                                    <h4 className="text-white">
                                        Proyecto
                                    </h4>
                                </div>
                                <div className="row ps-4 pe-4 pt-4 mb-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label pb-1">
                                                Nombre proyecto:
                                            </label>
                                            <input
                                                type="text"
                                                name="nom_proyecto"
                                                id="nom_proyecto"
                                                value={nom_proyecto || ""}
                                                
                                                className="form-control"
                                                disabled
                                            />
                                            <div className="invalid-feedback">
                                                Por favor completa este campo.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="lider"
                                            >
                                                Lider:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lider"
                                                value={lider || ""}
                                                name="lider"
                                                
                                                disabled
                                            />
                                            <div className="invalid-feedback">
                                                Por favor completa este campo.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-4 pe-4 mb-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="tipo_finanzamiento"
                                            >
                                                Tipo finalizamiento:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="tipo_finanzamiento"
                                                value={tipo_finanzamiento || ""}
                                                name="tipo_finanzamiento"
                                                
                                                disabled
                                            />
                                            <div className="invalid-feedback">
                                                Por favor completa este campo.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="programa"
                                            >
                                                Programa:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="programa"
                                                value={programa || ""}
                                                name="programa"
                                                
                                                disabled
                                            />
                                            <div className="invalid-feedback">
                                                Por favor completa este campo.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-4 pe-4 mb-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="fecha_inicio"
                                            >
                                                Fecha inicio:
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="fecha_inicio"
                                                value={
                                                    moment(fecha_inicio).format(
                                                        "YYYY-MM-DD"
                                                    ) || ""
                                                }
                                                name="fecha_inicio"
                                                
                                                disabled
                                            />
                                            <div className="invalid-feedback">
                                                Por favor ingresa una fecha.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="fecha_fin"
                                            >
                                                Fecha fin:
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="fecha_fin"
                                                value={
                                                    moment(fecha_fin).format(
                                                        "YYYY-MM-DD"
                                                    ) || ""
                                                }
                                                name="fecha_fin"
                                                
                                                disabled
                                            />
                                            <div className="invalid-feedback">
                                                Por favor ingresa una fecha.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="no_participantes"
                                            >
                                                Numero de participantes:
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="no_participantes"
                                                value={no_participantes || ""}
                                                name="no_participantes"
                                                
                                                disabled
                                            />
                                            <div className="invalid-feedback">
                                                Por favor ingresa numero de
                                                participantes.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-4 pe-4 mb-3">
                                    <div className="col">
                                        <div className="d-flex justify-content-around align-items-center">
                                            <Link
                                                to="/projects"
                                                className="btn btn-light btn-md"
                                            >
                                                Regresar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default ProjectSee;
