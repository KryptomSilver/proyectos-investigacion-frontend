import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Teacher from "./Teacher";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "./Nav";
import { AlertsSuccess } from "./alerts";

const ListTeachers = () => {
    //state para maestros
    const [teachers, setTeachers] = useState([]);
    const [alerteliminar, setAlerteliminar] = useState(true);
    //Consultar api
    useEffect(() => {
        const consultAPI = async () => {
            const url = `http://localhost:4000/api/teachers`;
            const teachers = await axios.get(url);
            setTeachers(teachers.data.docs);
        };
        consultAPI();
    }, [alerteliminar]);
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
                    const url = `http://localhost:4000/api/teachers/${id}`;
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
                <h1 className="text-center mt-2">Maestros</h1>
                <div className="d-flex align-items-center justify-content-end mt-3">
                    <Link to="/teacherformulario" className="btn btn-dark">
                        Agregar
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered mt-4">
                        <thead className="table-dark">
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Sexo</th>
                                <th className="text-center">Antigüedad</th>
                                <th className="text-center">Nombramiento</th>
                                <th className="text-center">Ingreso institución</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {teachers.map((teacher) => (
                                <Teacher
                                    key={teacher._id}
                                    teacher={teacher}
                                    eliminar={eliminar}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default ListTeachers;
