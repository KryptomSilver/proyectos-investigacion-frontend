import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import authContext from "../context/auth/authContext";
import logo from "../logo.svg";

const Nav = () => {
    // Extraer la información de autenticación
    const authcontext = useContext(authContext);
    const { usuarioAutenticado, cerrarSesion } = authcontext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="!#">
                    <img
                        src={logo}
                        alt=""
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top me-1"
                    />
                    PRODEP
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">
                                Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/teachers">
                                Maestros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/academicbs">
                                Cuerpos Académicos
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button
                            className="btn btn btn-outline-danger d-flex  align-items-center "
                            type="submit"
                            onClick={() => cerrarSesion()}
                        >
                            Cerrar sesión
                            <span id="login" className="ps-1 material-icons">
                                &#xea77;
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
