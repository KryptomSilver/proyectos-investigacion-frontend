import React, { useContext, useEffect, useState } from "react";
import authContext from "../context/auth/authContext";
import logo from "../logo.svg";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authcontext = useContext(authContext);
    const { iniciarSesion, autenticado } = authcontext;
    // En caso de que el password o usuario no exista
    useEffect(() => {
        if (autenticado) {
            props.history.push("/");
        }

        // eslint-disable-next-line
    }, [autenticado, props.history]);
    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion({ email, password });
    };
    return (
        <div
            className="d-flex justify-content-center"
            style={{ marginTop: "16rem" }}
        >
            <form onSubmit={onSubmit} className="form-login">
                <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: "-4.6rem" }}
                >
                    <img
                        src={logo}
                        alt=""
                        width="90"
                        height="90"
                        className="d-inline-block align-text-top me-1"
                    />
                </div>

                <div className="form-group mb-3 mt-2">
                    <label htmlFor="" className="form-label text-white">
                        Usuario:
                    </label>
                    <input
                        placeholder="Usuario"
                        className="form-control"
                        type="text"
                        name=""
                        id="user"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label text-white">
                        Contraseña:
                    </label>
                    <input
                        placeholder="Contraseña"
                        className="form-control"
                        type="password"
                        name=""
                        id="pass"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <input
                        type="submit"
                        className="btn btn-success boton"
                        value="Sign In"
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;
