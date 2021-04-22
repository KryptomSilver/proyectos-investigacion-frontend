import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const FormularioMaestros = (props) => {
    const id = props.location.state.id;
    const [teacher, setTeacher] = useState({
        nombre: "",
        nombramiento: "",
        sexo: "",
        ingreso_institucion: "",
        antiguedad: "",
        grado_max: "",
    });
    const {
        nombre,
        nombramiento,
        sexo,
        ingreso_institucion,
        antiguedad,
        grado_max,
    } = teacher;
    const onChange = (e) => {
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        const consultarTeacher = async () => {
            console.log(id);
            const url = `http://localhost:4000/api/teachers/${id}`;
            const teacher = await axios.get(url);
            const {
                nombre,
                nombramiento,
                sexo,
                ingreso_institucion,
                antiguedad,
                grado_max,
            } = teacher.data;
            setTeacher({
                nombre,
                nombramiento,
                sexo,
                ingreso_institucion,
                antiguedad,
                grado_max,
            });
        };
        consultarTeacher();
    }, [id]);
    return (
        <Fragment>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-dark text-center">
                                <h4 className="text-white">Maestro</h4>
                            </div>
                            <div className="row ps-4 pe-4 pt-4 mb-3">
                                <div className="col">
                                    <div className="mb-2">
                                        <label className="form-label pb-1">
                                            Nombre:
                                        </label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            value={nombre}
                                            onChange={onChange}
                                            className="form-control"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2">
                                        <label
                                            className="form-label pb-1"
                                            htmlFor="sexo"
                                        >
                                            Sexo:
                                        </label>
                                        <select
                                            className="form-select"
                                            id="sexo"
                                            value={sexo}
                                            name="sexo"
                                            onChange={onChange}
                                            disabled
                                        >
                                            <option defaultValue>
                                                Selecciona una opción
                                            </option>
                                            <option value="H">Hombre</option>
                                            <option value="M">Mujer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row ps-4 pe-4 mb-3">
                                <div className="col">
                                    <div className="mb-2">
                                        <label className="form-label pb-1">
                                            Nombramiento:
                                        </label>
                                        <input
                                            type="text"
                                            name="nombramiento"
                                            id="nombramiento"
                                            onChange={onChange}
                                            value={nombramiento}
                                            className="form-control"
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="mb-2">
                                        <label
                                            className="form-label pb-1"
                                            htmlFor="grado"
                                        >
                                            Ingreso institucion:
                                        </label>
                                        <input
                                            type="date"
                                            name="ingreso_institucion"
                                            id=""
                                            onChange={onChange}
                                            value={moment(
                                                ingreso_institucion
                                            ).format("YYYY-MM-DD")}
                                            className="form-control"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row ps-4 pe-4 mb-3">
                                <div className="col">
                                    <div className="mb-2">
                                        <label className="form-label pb-1">
                                            Antiguedad:
                                        </label>
                                        <input
                                            type="date"
                                            name="antiguedad"
                                            id="antiguedad"
                                            value={moment(antiguedad).format(
                                                "YYYY-MM-DD"
                                            )}
                                            onChange={onChange}
                                            className="form-control"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2">
                                        <label
                                            className="form-label pb-1"
                                            htmlFor="grado"
                                        >
                                            Grado maximo:
                                        </label>
                                        <select
                                            className="form-select"
                                            id="grado"
                                            value={grado_max}
                                            name="grado_max"
                                            onChange={onChange}
                                            disabled
                                        >
                                            <option defaultValue>
                                                Selecciona una opción
                                            </option>
                                            <option value="Licenciatura">
                                                Licenciatura
                                            </option>
                                            <option value="Maestria">
                                                Mastria
                                            </option>
                                        </select>
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

export default FormularioMaestros;
