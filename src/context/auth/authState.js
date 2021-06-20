import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";
import {
    CERRAR_SESION,
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    OBTENER_USUARIO,
} from "../../types";
import AutContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        usuario: null,
        autenticado: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            tokenAuth(token);
        } else {
            return;
        }

        try {
            const respuesta = await clienteAxios.get("/api/auth");
            // console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario,
            });
        } catch (error) {
            // console.log(error.response);
            dispatch({
                type: LOGIN_ERROR,
            });
        }
    };
    // Cuando el usuario inicia sesión
    const iniciarSesion = async (datos) => {
        try {
            const respuesta = await clienteAxios.post("/api/auth", datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data,
            });

            // Obtener el usuario
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: "alerta-error",
            };

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta,
            });
        }
    };

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION,
        });
    };
    return (
        <AutContext.Provider
            value={{
                token: state.token,
                usuario: state.usuario,
                autenticado: state.autenticado,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
            }}
        >
            {props.children}
        </AutContext.Provider>
    );
};

export default AuthState;
