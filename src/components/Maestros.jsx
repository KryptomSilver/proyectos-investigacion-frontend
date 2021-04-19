import React from "react";

const Maestros = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-end mt-3">
                <a href="" className="btn btn-dark">
                    Agregar
                </a>
            </div>
            <table className="table table-bordered mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Puesto</th>
                        <th>Año de nacimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {/* aqui va ir el resultado de los maestros */}
                        <td>Abel Romero Ruiz</td>
                        <td>Estudiante</td>
                        <td>08/01/1998</td>
                        <td className="d-flex align-items-center justify-content-evenly">
                            <a
                                href=""
                                className="btn btn-success btn-sm d-flex align-items-center"
                            >
                                <span className="material-icons me-2">
                                    &#xe3c9;
                                </span>
                                Editar
                            </a>
                            <a
                                href=""
                                className="btn btn-danger btn-sm d-flex align-items-center"
                            >
                                <span className="material-icons me-2">
                                    &#xe872;
                                </span>
                                Eliminar
                            </a>
                            <a
                                href=""
                                className="btn btn-info btn-sm d-flex align-items-center text-white"
                            >
                                <span className="material-icons me-2">
                                    &#xe8f4;
                                </span>
                                Ver
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Maestros;
