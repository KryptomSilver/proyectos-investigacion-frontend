import React from "react";
import styled from "@emotion/styled";
import imagen from "./construct.png";
import { Link } from "react-router-dom";
const Imagen = styled.img`
    height: "100rem";
`;
const Templeate = () => {
    return (
        <div>
            <h1 className="text-center pt-2 pb-2">Pagina en construcción</h1>
            
            <Imagen src={imagen}></Imagen>
            <Link to="/teachers" className="btn btn-lg btn-danger">
                Ir a maestros
            </Link>
            <div className="progress">
                <div
                    className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                ></div>
            </div>
        </div>
    );
};

export default Templeate;
