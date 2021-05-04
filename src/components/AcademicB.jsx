import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
const Maestros = ({ academicb, eliminar }) => {
    return (
        <tr>
            <td className="text-center">{academicb.nombre}</td>
            <td className="text-center">{academicb.clave}</td>
            <td className="text-center">{academicb.igac}</td>
            <td className="text-center">
                {moment(academicb.fecha_inicio).format("YYYY/MM/DD")}
            </td>
            <td className="text-center">
                {moment(academicb.fecha_fin).format("YYYY/MM/DD")}
            </td>
            <td className="d-flex align-items-center justify-content-evenly">
                <Link
                    to={{
                        pathname: "/academicbedit",
                        state: { id: academicb._id },
                    }}
                    className="btn btn-success btn-sm d-flex align-items-center"
                >
                    <span className="material-icons me-1">&#xe3c9;</span>
                    Editar
                </Link>
                <button
                    onClick={() => eliminar(academicb._id)}
                    className="btn btn-danger btn-sm d-flex align-items-center"
                >
                    <span className="material-icons me-1">&#xe872;</span>
                    Eliminar
                </button>
                <Link
                    to={{
                        pathname: "/academicbsee",
                        state: { id: academicb._id },
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
