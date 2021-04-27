import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { AlertsSuccess } from "./alerts";
import axios from "axios";
import Nav from "./Nav";

const FormTeacher = () => {
    const [redirect, setRedirect] = useState(false);
    const [antiguedadNew, setantiguedadNew] = useState("");
    const [teacher, setTeacher] = useState({
        nombre: "",
        nombramiento: "",
        sexo: "",
        ingreso_institucion: "",
        grado_max: "",
    });
    const {
        nombre,
        nombramiento,
        sexo,
        ingreso_institucion,
        grado_max,
    } = teacher;
    const onChange = (e) => {
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        const fechaHoyMil = Date.now();
        const fechaHoyNew = new Date(fechaHoyMil);
        const fechaIngNew = new Date(ingreso_institucion);
        const fechaAnt = fechaHoyNew.getFullYear() - fechaIngNew.getFullYear();
        setantiguedadNew({
            ...fechaAnt,
            fechaAnt,
        });
    }, [ingreso_institucion]);

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
                    .post("http://localhost:4000/api/teachers", {
                        nombre: nombre,
                        nombramiento: nombramiento,
                        sexo: sexo,
                        ingreso_institucion: ingreso_institucion,
                        antiguedad: antiguedadNew.fechaAnt,
                        grado_max: grado_max,
                    })
                    .then(
                        (respose) => {
                            console.log(respose);
                            AlertsSuccess(respose.data.message);
                            setTimeout(() => {
                                setRedirect(true);
                            }, 1500);
                            setTeacher({});
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
                {redirect ? <Redirect to="/teachers" /> : null}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-center">
                                    <h4 className="text-white">
                                        Agregar Maestro
                                    </h4>
                                </div>
                                <div className="row ps-4 pe-4 pt-4 mb-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label pb-1">
                                                Nombre:
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                id="nombre"
                                                value={nombre || ""}
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
                                                htmlFor="sexo"
                                            >
                                                Sexo:
                                            </label>
                                            <select
                                                className="form-select"
                                                id="sexo"
                                                value={sexo || ""}
                                                name="sexo"
                                                onChange={onChange}
                                                required
                                            >
                                                <option defaultValue value="">
                                                    Selecciona una opción
                                                </option>
                                                <option value="H">
                                                    Hombre
                                                </option>
                                                <option value="M">Mujer</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Por favor selecciona una opción.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-4 pe-4 mb-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="nombramiento"
                                            >
                                                Nombramiento:
                                            </label>
                                            <select
                                                className="form-select"
                                                id="nombramiento"
                                                value={nombramiento || ""}
                                                name="nombramiento"
                                                onChange={onChange}
                                                required
                                            >
                                                <option value="" defaultValue>
                                                    Selecciona una opción
                                                </option>
                                                <option value="Profesor tiempo completo">
                                                    Profesor tiempo completo
                                                </option>
                                                <option value="Profesor 3/4 tiempo">
                                                    Profesor 3/4 tiempo
                                                </option>
                                                <option value="Profesor medio tiempo">
                                                    Profesor medio tiempo
                                                </option>
                                                <option value="Profesor asignatura">
                                                    Profesor asignatura
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Por favor selecciona una opción.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="ingreso"
                                            >
                                                Ingreso institucion:
                                            </label>
                                            <input
                                                type="date"
                                                name="ingreso_institucion"
                                                id="ingreso"
                                                onChange={onChange}
                                                value={
                                                    ingreso_institucion || ""
                                                }
                                                className="form-control"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Por favor selecciona una fecha.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-4 pe-4 mb-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label pb-1">
                                                Antiguedad:
                                            </label>
                                            <input
                                                type="text"
                                                name="antiguedadNew"
                                                id="antiguedadNew"
                                                value={
                                                    antiguedadNew.fechaAnt || ""
                                                }
                                                onChange={onChange}
                                                className="form-control"
                                                required
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="grado"
                                            >
                                                Grado maximo:
                                            </label>
                                            <select
                                                className="form-select"
                                                id="grado"
                                                value={grado_max || ""}
                                                name="grado_max"
                                                onChange={onChange}
                                                required
                                            >
                                                <option value="" defaultValue>
                                                    Selecciona una opción
                                                </option>
                                                <option value="Licenciatura">
                                                    Licenciatura
                                                </option>
                                                <option value="Maestría">
                                                    Maestría
                                                </option>
                                                <option value="Doctorado">
                                                    Doctorado
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Por favor selecciona una opción.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-4 pe-4 mb-3">
                                    <div className="col">
                                        <div className="d-flex justify-content-around align-items-center">
                                            <Link
                                                to="/teachers"
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

export default FormTeacher;
