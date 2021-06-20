import moment from "moment";
import React from "react";
import { Link, Redirect } from "react-router-dom";

const FormProject = ({
    disabled,
    add,
    btnAdd,
    title,
    redirect,
    handlerSubmit,
    onChange,
    nom_proyecto,
    lider,
    teachers,
    tipo_financiamiento,
    programa,
    careers,
    fecha_inicio,
    fecha_fin,
    no_participantes,
}) => {
    return (
        <form onSubmit={handlerSubmit} noValidate className="needs-validation">
            {redirect ? <Redirect to="/projects" /> : null}
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-dark text-center">
                                <h4 className="text-white">{title}</h4>
                            </div>
                            <div className="row ps-4 pe-4 pt-4 mb-3">
                                <div className="col">
                                    <div className="form-group">
                                        <label className="form-label pb-1">
                                            Nombre proyecto:
                                        </label>
                                        {disabled ? (
                                            <input
                                                type="text"
                                                name="nom_proyecto"
                                                id="nom_proyecto"
                                                value={nom_proyecto || ""}
                                                onChange={onChange}
                                                className="form-control"
                                                required
                                                disabled
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                name="nom_proyecto"
                                                id="nom_proyecto"
                                                value={nom_proyecto || ""}
                                                onChange={onChange}
                                                className="form-control"
                                                required
                                            />
                                        )}
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
                                        {disabled ? (
                                            <select
                                                name="lider"
                                                id="lider"
                                                className="form-select"
                                                value={lider || ""}
                                                onChange={onChange}
                                                disabled
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
                                        ) : (
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
                                        )}
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
                                        {disabled ? (
                                            <select
                                                className="form-select"
                                                id="tipo_financiamiento"
                                                value={
                                                    tipo_financiamiento || ""
                                                }
                                                name="tipo_financiamiento"
                                                onChange={onChange}
                                                required
                                                disabled
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
                                        ) : (
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
                                        )}
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
                                        {disabled ? (
                                            <select
                                                name="programa"
                                                id="programa"
                                                className="form-select"
                                                value={programa || ""}
                                                onChange={onChange}
                                                disabled
                                            >
                                                <option value="" defaultValue>
                                                    Selecciona una opción
                                                </option>
                                                {careers.map((career) => (
                                                    <option value={career._id}>
                                                        {career.nombre}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <select
                                                name="programa"
                                                id="programa"
                                                className="form-select"
                                                value={programa || ""}
                                                onChange={onChange}
                                            >
                                                <option value="" defaultValue>
                                                    Selecciona una opción
                                                </option>
                                                {careers.map((career) => (
                                                    <option value={career._id}>
                                                        {career.nombre}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
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
                                        {disabled ? (
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="fecha_inicio"
                                                value={
                                                    add
                                                        ? fecha_inicio
                                                        : moment(
                                                              fecha_inicio
                                                          ).format(
                                                              "YYYY-MM-DD"
                                                          ) || ""
                                                }
                                                name="fecha_inicio"
                                                onChange={onChange}
                                                required
                                                disabled
                                            />
                                        ) : (
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="fecha_inicio"
                                                value={
                                                    add
                                                        ? fecha_inicio
                                                        : moment(
                                                              fecha_inicio
                                                          ).format(
                                                              "YYYY-MM-DD"
                                                          ) || ""
                                                }
                                                name="fecha_inicio"
                                                onChange={onChange}
                                                required
                                            />
                                        )}
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
                                        {disabled ? (
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="fecha_fin"
                                                value={
                                                    add
                                                        ? fecha_fin
                                                        : moment(
                                                              fecha_fin
                                                          ).format(
                                                              "YYYY-MM-DD"
                                                          ) || ""
                                                }
                                                name="fecha_fin"
                                                onChange={onChange}
                                                required
                                                disabled
                                            />
                                        ) : (
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="fecha_fin"
                                                value={
                                                    add
                                                        ? fecha_fin
                                                        : moment(
                                                              fecha_fin
                                                          ).format(
                                                              "YYYY-MM-DD"
                                                          ) || ""
                                                }
                                                name="fecha_fin"
                                                onChange={onChange}
                                                required
                                            />
                                        )}
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
                                        {disabled ? (
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="no_participantes"
                                                value={no_participantes || ""}
                                                name="no_participantes"
                                                onChange={onChange}
                                                required
                                                disabled
                                            />
                                        ) : (
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="no_participantes"
                                                value={no_participantes || ""}
                                                name="no_participantes"
                                                onChange={onChange}
                                                required
                                            />
                                        )}
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
                                        {btnAdd ? (
                                            <input
                                                type="submit"
                                                value="Agregar"
                                                className="btn btn-dark btn-md d-flex align-items-center"
                                            />
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormProject;
