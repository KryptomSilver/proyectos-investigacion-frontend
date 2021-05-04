import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const AcademicBSee = (props) => {
    const id = props.location.state.id;
    const [academicb, setAcademicb] = useState({
        nombre: "",
        clave: "",
        fecha_inicio: "",
        fecha_fin: "",
        igac: "",
    });
    const { nombre, clave, fecha_inicio, fecha_fin, igac } = academicb;
    useEffect(() => {
        const consultarAcademicB = async () => {
            const url = `http://localhost:4000/api/academicbs/${id}`;
            const academicb = await axios.get(url);
            const {
                nombre,
                clave,
                fecha_inicio,
                fecha_fin,
                igac,
            } = academicb.data;
            setAcademicb({
                nombre,
                clave,
                fecha_inicio,
                fecha_fin,
                igac,
            });
        };
        consultarAcademicB();
    }, [id]);
    return (
        <Fragment>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-dark text-center">
                                <h4 className="text-white">Cuerpo Académico</h4>
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
                                            htmlFor="clave"
                                        >
                                            Clave:
                                        </label>
                                        <input
                                            className="form-control"
                                            id="clave"
                                            value={clave || ""}
                                            name="clave"
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
                                            name="fecha_inicio"
                                            id="fecha_inicio"
                                            value={
                                                moment(fecha_inicio).format(
                                                    "YYYY-MM-DD"
                                                ) || ""
                                            }
                                            className="form-control"
                                            disabled
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
                                            value={
                                                moment(fecha_fin).format(
                                                    "YYYY-MM-DD"
                                                ) || ""
                                            }
                                            className="form-control"
                                            disabled
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
                                            className="form-control"
                                            disabled
                                        />
                                    </div>
                                    <div className="invalid-feedback">
                                        Por favor completa este campo.
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AcademicBSee;
