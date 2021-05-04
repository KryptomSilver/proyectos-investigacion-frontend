import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AlertsSuccess } from "./alerts";
import Nav from "./Nav";
import AcacemicB from "./AcademicB";

const ListAcademicBs = () => {
    const [alerteliminar, setAlerteliminar] = useState(true);
    //state para la pagina actual
    const [academicbs, setAcademicbs] = useState([]);
    //state para la pagina actual
    const [paginaactual, setPaginaactual] = useState(1);
    //state para el total de paginas
    const [totalpaginas, setTotalpaginas] = useState(1);
    useEffect(() => {
        const consultAPI = async () => {
            const academicbPagina = 5;
            const url = `http://192.168.1.74:4000/api/academicbs?&page=${
                paginaactual - 1
            }&size=${academicbPagina}`;
            const academicbs = await axios.get(url);
            const calcularPaginas = Math.ceil(
                academicbs.data.totalDocs / academicbPagina
            );
            setTotalpaginas(calcularPaginas);
            setAcademicbs(academicbs.data.docs);
        };
        consultAPI();
    }, [alerteliminar, paginaactual]);
    //funcion para la pagina anterior
    const paginaAnterior = () => {
        const nuevaPaginaActual = paginaactual - 1;
        if (nuevaPaginaActual === 0) return;
        setPaginaactual(nuevaPaginaActual);
    };
    const paginaSiguiente = () => {
        const nuevaPaginaActual = paginaactual + 1;
        if (nuevaPaginaActual > totalpaginas) return;
        setPaginaactual(nuevaPaginaActual);
    };
    //Función para eliminar
    const eliminar = (id) => {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "Estos datos se perderan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!",
        }).then((result) => {
            if (result.isConfirmed) {
                const eliminarAPI = async () => {
                    const url = `http://192.168.1.74:4000/api/academicbs/${id}`;
                    const respuesta = await axios.delete(url);
                    if (respuesta.status === 200) {
                        AlertsSuccess(respuesta.data.message);
                    }
                    setAlerteliminar(true);
                };
                setAlerteliminar(false);
                eliminarAPI();
            } else {
            }
        });
    };
    return (
        <Fragment>
            <Nav />
            <div className="container">
                <h1 className="text-center mt-2">Cuerpos Académicos</h1>
                <div className="d-flex align-items-center justify-content-end mt-3">
                    <Link to="/academicbform" className="btn btn-dark">
                        Agregar
                    </Link>
                </div>
                <div className="table-responsive">
                    <table
                        className="table table-bordered mt-4"
                        style={{ fontSize: ".8rem" }}
                    >
                        <thead className="table-dark">
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Clave</th>
                                <th className="text-center">IGAC</th>
                                <th className="text-center">Fecha inicio</th>
                                <th className="text-center">Fecha fin</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {academicbs.map((academicb) => (
                                <AcacemicB
                                    key={academicb._id}
                                    academicb={academicb}
                                    eliminar={eliminar}
                                />
                            ))}
                        </tbody>
                    </table>
                    <nav className="d-flex justify-content-end pe-1">
                        <ul className="pagination ">
                            <li className="page-item">
                                {paginaactual === 1 ? null : (
                                    <button
                                        onClick={paginaAnterior}
                                        className="page-link"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                )}
                            </li>
                            <li className="page-item disabled">
                                <button className="page-link " disabled>
                                    ...
                                </button>
                            </li>

                            <li className="page-item">
                                {paginaactual === totalpaginas ? null : (
                                    <button
                                        onClick={paginaSiguiente}
                                        className="page-link"
                                        href="#"
                                        aria-label="Next"
                                    >
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
};

export default ListAcademicBs;
