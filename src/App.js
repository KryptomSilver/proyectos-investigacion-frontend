import { Fragment } from "react";
import FormularioMaestros from "./components/FormularioMaestros";
import Maestros from "./components/Maestros";
import Nav from "./components/Nav";

function App() {
    return (
        <Fragment>
            <Nav />
            <div className="container">
                <Maestros />
            </div>
        </Fragment>
    );
}

export default App;
