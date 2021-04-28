import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { AlertsSuccess } from "./alerts";
import Nav from "./Nav";

const FormProjectEdit = (props) => {
    const id = props.location.state.id;
    //state redirect
    const [redirect, setRedirect] = useState(false);
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
    //guardar en el state cada ves que cambie un dato en formulario
    const onChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };
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
    const sendForm = (e) => {
        var forms = document.querySelectorAll(".needs-validation");
        Array.prototype.slice.call(forms).forEach(function (form) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                form.classList.add("was-validated");
            } else {
                e.preventDefault();
                axios
                    .put(`http://localhost:4000/api/projects/${id}`, {
                        lider,
                        nom_proyecto,
                        tipo_finanzamiento,
                        programa,
                        fecha_inicio,
                        fecha_fin,
                        no_participantes,
                    })
                    .then(
                        (respose) => {
                            console.log(respose);
                            AlertsSuccess(respose.data.message);
                            setTimeout(() => {
                                setRedirect(true);
                            }, 1500);
                            setProject({});
                            form.classList.remove("was-validated");
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
            }
        });
    };
    return (
        <Fragment>
            <Nav />
            <form onSubmit={sendForm} noValidate className="needs-validation">
                {redirect ? <Redirect to="/projects" /> : null}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-center">
                                    <h4 className="text-white">
                                        Editar Proyecto
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
                                                onChange={onChange}
                                                className="form-control"
                                                required
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
                                                onChange={onChange}
                                                required
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
                                                onChange={onChange}
                                                required
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
                                                onChange={onChange}
                                                required
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
                                                value={moment(
                                                    fecha_inicio
                                                ).format("YYYY-MM-DD") || ""}
                                                name="fecha_inicio"
                                                onChange={onChange}
                                                required
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
                                                value={moment(
                                                    fecha_fin
                                                ).format("YYYY-MM-DD") || ""}
                                                name="fecha_fin"
                                                onChange={onChange}
                                                required
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
                                                onChange={onChange}
                                                required
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
                                            <input
                                                type="submit"
                                                value="Editar"
                                                className="btn btn-dark btn-md d-flex align-items-center"
                                            />
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

export default FormProjectEdit;
