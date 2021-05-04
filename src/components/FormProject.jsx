import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AlertsSuccess } from "./alerts";
import axios from "axios";
import Nav from "./Nav";
const FormProject = () => {
    //state redirect
    const [redirect, setRedirect] = useState(false);
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
    //guardar en el state cada ves que cambie un dato en formulario
    const onChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };
    //usestate para maestros
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        const consultAPI = async () => {
            const url = `http://localhost:4000/api/teachers/all`;
            const teachers = await axios.get(url);
            setTeachers(teachers.data);
            console.log(teachers.data);
        };
        consultAPI();
    }, []);
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
                    .post("http://localhost:4000/api/projects", {
                        lider,
                        nom_proyecto,
                        tipo_financiamiento,
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
                                        Agregar Proyecto
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
                                            <select
                                                name="lider"
                                                id="lider"
                                                className="form-select"
                                                value={lider || ""}
                                                onChange={onChange}
                                            >
                                                <option value="" defaultValue>
                                                    Selecciona una opción
                                                </option>
                                                {teachers.map((teacher) => (
                                                    <option value={teacher._id}>
                                                        {teacher.nombre}
                                                    </option>
                                                ))}
                                            </select>
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
                                                htmlFor="tipo_financiamiento"
                                            >
                                                Tipo financiamiento:
                                            </label>
                                            <select
                                                className="form-select"
                                                id="tipo_financiamiento"
                                                value={
                                                    tipo_financiamiento || ""
                                                }
                                                name="tipo_financiamiento"
                                                onChange={onChange}
                                                required
                                            >
                                                <option value="" defaultValue>
                                                    Selecciona una opción
                                                </option>
                                                <option value="CONACYT">
                                                    CONACYT
                                                </option>
                                                <option value="TECNM">
                                                    TECNM
                                                </option>
                                                <option value="PRODEP">
                                                    PRODEP
                                                </option>
                                            </select>
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
                                                value={fecha_inicio || ""}
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
                                                value={fecha_fin || ""}
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
                                                value="Agregar"
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

export default FormProject;
