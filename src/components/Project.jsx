import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({project,eliminar}) => {
    return (
        <tr>
            <td className="text-center">{project.nom_proyecto}</td>
            <td className="text-center">{project.lider}</td>
            <td className="text-center">{project.tipo_finanzamiento}</td>

            <td className="text-center">{project.programa}</td>

            <td className="text-center">
                {moment(project.fecha_inicio).format("YYYY/MM/DD")}
            </td>
            <td className="text-center">
                {moment(project.fecha_fin).format("YYYY/MM/DD")}
            </td>
            <td className="d-flex align-items-center justify-content-evenly">
                <Link
                    to={{
                        pathname: "/projectedit",
                        state: { id: project._id },
                    }}
                    className="btn btn-success btn-sm d-flex align-items-center"
                >
                    <span className="material-icons me-1">&#xe3c9;</span>
                    Editar
                </Link>
                <button
                    onClick={() => eliminar(project._id)}
                    className="btn btn-danger btn-sm d-flex align-items-center"
                >
                    <span className="material-icons me-1">&#xe872;</span>
                    Eliminar
                </button>
                <Link
                    to={{
                        pathname: "/projectsee",
                        state: { id: project._id },
                    }}
                    className="btn btn-info btn-sm d-flex align-items-center text-white"
                >
                    <span className="material-icons me-1">&#xe8f4;</span>
                    Ver
                </Link>
            </td>
        </tr>
    )
}

export default Project
