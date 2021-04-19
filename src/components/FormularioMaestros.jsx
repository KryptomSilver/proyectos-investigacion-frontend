import React from "react";

const FormularioMaestros = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-dark text-center">
                            <h4 className="text-white">Agregar Maestro</h4>
                        </div>
                        <div className="row ps-4 pe-4 pt-4 mb-3">
                            <div className="col">
                                <div className="mb-2">
                                    <label className="form-label pb-1">
                                        Nombre:
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2">
                                    <label
                                        className="form-label pb-1"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Grado maximo:
                                    </label>
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option defaultValue>
                                            Selecciona una opción
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
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
                                        name=""
                                        id=""
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2">
                                    <label
                                        className="form-label pb-1"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Sexo:
                                    </label>
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option defaultValue>
                                            Selecciona una opción
                                        </option>
                                        <option value="1">Hombre</option>
                                        <option value="2">Mujer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2">
                                    <label
                                        className="form-label pb-1"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Edad:
                                    </label>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row ps-4 pe-4 mb-3">
                            <div className="col">
                                <div className="mb-2">
                                    <label className="form-label pb-1">
                                        Ingreso a la institución:
                                    </label>
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2">
                                    <label className="form-label pb-1">
                                        Antiguedad:
                                    </label>
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row ps-4 pe-4 mb-3">
                            <div className="col">
                                <div className="d-flex justify-content-around align-items-center">
                                    <a
                                        href="listaMaestro.html"
                                        className="btn btn-light btn-md"
                                    >
                                        Regresar
                                    </a>
                                    <button
                                        type="submit"
                                        className="btn btn-dark btn-md d-flex align-items-center"
                                    >
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioMaestros;
