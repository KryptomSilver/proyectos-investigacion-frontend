import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
const Maestros = ({ teacher, eliminar }) => {
    return (
        <tr>
            <td className="text-center">{teacher.nombre}</td>
            <td className="text-center">
                {teacher.sexo === "H" ? "Hombre" : "Mujer"}
            </td>
            <td className="text-center">{`${teacher.antiguedad} años`}</td>
            <td className="text-center">{teacher.nombramiento}</td>
            <td className="text-center">
                {moment(teacher.ingreso_institucion).format("YYYY/MM/DD")}
            </td>
            <td className="d-flex align-items-center justify-content-evenly">
                <Link
                    to={{
                        pathname: "/teacheredit",
                        state: { id: teacher._id },
                    }}
                    className="btn btn-success btn-sm d-flex align-items-center"
                >
                    <span className="material-icons me-1">&#xe3c9;</span>
                    Editar
                </Link>
                <button
                    onClick={() => eliminar(teacher._id)}
                    className="btn btn-danger btn-sm d-flex align-items-center"
                >
                    <span className="material-icons me-1">&#xe872;</span>
                    Eliminar
                </button>
                <Link
                    to={{
                        pathname: "/teachersee",
                        state: { id: teacher._id },
                    }}
                    className="btn btn-info btn-sm d-flex align-items-center text-white"
                >
                    <span className="material-icons me-1">&#xe8f4;</span>
                    Ver
                </Link>
            </td>
        </tr>
    );
};

export default Maestros;
