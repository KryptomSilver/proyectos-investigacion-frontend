import React, { Fragment, useEffect, useState } from "react";
import { AlertsSuccess } from "../components/alerts";
import Nav from "../components/Nav";
import FormProject from "../components/FormProject";
import clienteAxios from "../config/axios";
const ProjectAdd = () => {
    //state redirect
    const [redirect, setRedirect] = useState(false);
    //state para el proyecto
    const [project, setProject] = useState({
        lider: "",
        nom_proyecto: "",
        tipo_financiamiento: "",
        programa: "",
        fecha_inicio: "",
        fecha_fin: "",
        no_participantes: 0,
    });
    //Extraer dadtos de el proyecto
    const {
        lider,
        nom_proyecto,
        tipo_financiamiento,
        programa,
        fecha_inicio,
        fecha_fin,
        no_participantes,
    } = project;
    //guardar en el state cada ves que cambie un dato en formulario
    const onChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };
    //usestate para maestros
    const [teachers, setTeachers] = useState([]);
    const [careers, setCareers] = useState([]);
    useEffect(() => {
        const getTeachers = async () => {
            const url = `http://localhost:4000/api/teachers/all`;
            const teachers = await clienteAxios.get(url);
            setTeachers(teachers.data);
            console.log(teachers.data);
        };
        const getCareers = async () => {
            const url = `http://localhost:4000/api/careers/all`;
            const careers = await clienteAxios.get(url);
            setCareers(careers.data);
        };
        getTeachers();
        getCareers();
    }, []);
    const sendForm = (e) => {
        var forms = document.querySelectorAll(".needs-validation");
        Array.prototype.slice.call(forms).forEach(function (form) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                form.classList.add("was-validated");
            } else {
                e.preventDefault();
                clienteAxios
                    .post("http://localhost:4000/api/projects", {
                        lider,
                        nom_proyecto,
                        tipo_financiamiento,
                        programa,
                        fecha_inicio,
                        fecha_fin,
                        no_participantes,
                    })
                    .then(
                        (respose) => {
                            console.log(respose);
                            AlertsSuccess(respose.data.message);
                            setTimeout(() => {
                                setRedirect(true);
                            }, 1500);
                            setProject({});
                            form.classList.remove("was-validated");
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
            }
        });
    };
    return (
        <Fragment>
            <Nav />

            <FormProject
                key="23dwdsd"
                redirect={redirect}
                title="Agregar Proyecto"
                handlerSubmit={sendForm}
                onChange={onChange}
                nom_proyecto={nom_proyecto}
                lider={lider}
                teachers={teachers}
                tipo_financiamiento={tipo_financiamiento}
                programa={programa}
                fecha_inicio={fecha_inicio}
                fecha_fin={fecha_fin}
                no_participantes={no_participantes}
                btnAdd={true}
                careers={careers}
                add={true}
            />
        </Fragment>
    );
};

export default ProjectAdd;
