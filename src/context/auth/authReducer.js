import {
    CERRAR_SESION,
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    OBTENER_USUARIO,
} from "../../types";
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case LOGIN_EXITOSO:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                autenticado: true,
            };
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
            };
        case LOGIN_ERROR:
        case CERRAR_SESION:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
            };
        default:
            return state;
    }
};
