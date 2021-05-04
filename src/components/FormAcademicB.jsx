import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AlertsSuccess } from "./alerts";
import Nav from "./Nav";

const FormAcademicB = () => {
    const [redirect, setRedirect] = useState(false);
    const [academicb, setAcademicb] = useState({
        nombre: "",
        clave: "",
        fecha_inicio: "",
        fecha_fin: "",
        igac: "",
    });
    const { nombre, clave, fecha_inicio, fecha_fin, igac } = academicb;
    const onChange = (e) => {
        setAcademicb({
            ...academicb,
            [e.target.name]: e.target.value,
        });
    };
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
                    .post("http://localhost:4000/api/academicbs", {
                        nombre,
                        clave,
                        fecha_inicio,
                        fecha_fin,
                        igac,
                    })
                    .then(
                        (respose) => {
                            console.log(respose);
                            AlertsSuccess(respose.data.message);
                            setTimeout(() => {
                                setRedirect(true);
                            }, 1500);
                            setAcademicb({});
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
                {redirect ? <Redirect to="/academicbs" /> : null}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-center">
                                    <h4 className="text-white">
                                        Agregar Cuerpo Académico
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
                                                htmlFor="clave"
                                            >
                                                Clave:
                                            </label>
                                            <input
                                                className="form-control"
                                                id="clave"
                                                value={clave || ""}
                                                name="clave"
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
                                                name="fecha_inicio"
                                                id="fecha_inicio"
                                                onChange={onChange}
                                                value={fecha_inicio || ""}
                                                className="form-control"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Por favor selecciona una fecha.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="fecha_fin"
                                            >
                                                Fecha inicio:
                                            </label>
                                            <input
                                                type="date"
                                                name="fecha_fin"
                                                id="fecha_fin"
                                                onChange={onChange}
                                                value={fecha_fin || ""}
                                                className="form-control"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Por favor selecciona una fecha.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label
                                                className="form-label pb-1"
                                                htmlFor="igac"
                                            >
                                                IGAC:
                                            </label>
                                            <input
                                                type="text"
                                                name="igac"
                                                id="igac"
                                                value={igac || ""}
                                                onChange={onChange}
                                                className="form-control"
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
                                        <div className="d-flex justify-content-around align-items-center">
                                            <Link
                                                to="/academicbs"
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

export default FormAcademicB;
