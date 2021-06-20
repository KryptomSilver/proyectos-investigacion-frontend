import React, { Fragment, useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import { AlertsSuccess } from "../components/alerts";
import FormProject from "../components/FormProject";
import Nav from "../components/Nav";

const FormProjectEdit = (props) => {
    const id = props.location.state.id;
    const [teachers, setTeachers] = useState([]);
    const [careers, setCareers] = useState([]);
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
    useEffect(() => {
        const consultarProject = async () => {
            const url = `http://localhost:4000/api/projects/${id}`;
            const project = await clienteAxios.get(url);
            const {
                lider,
                nom_proyecto,
                tipo_financiamiento,
                programa,
                fecha_inicio,
                fecha_fin,
                no_participantes,
            } = project.data;
            setProject({
                lider,
                nom_proyecto,
                tipo_financiamiento,
                programa,
                fecha_inicio,
                fecha_fin,
                no_participantes,
            });
        };
        const getTeachers = async () => {
            const url = `http://localhost:4000/api/teachers/all`;
            const teachers = await clienteAxios.get(url);
            setTeachers(teachers.data);
        };
        const getCareers = async () => {
            const url = `http://localhost:4000/api/careers/all`;
            const careers = await clienteAxios.get(url);
            setCareers(careers.data);
        };
        getTeachers();
        getCareers();
        consultarProject();
    }, [id]);
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
                    .put(`http://localhost:4000/api/projects/${id}`, {
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
                key="skdflswjgeflwjgelgw"
                redirect={redirect}
                title="Editar Proyecto"
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
            />
        </Fragment>
    );
};

export default FormProjectEdit;
