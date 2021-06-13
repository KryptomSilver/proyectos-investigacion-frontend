import { BrowserRouter as Router, Switch } from "react-router-dom";
import FormTeacher from "./components/FormTeacher";
import ListTeachers from "./components/ListTeachers";
import FormTeacherEdit from "./components/FormTeacherEdit";
import TeacherSee from "./components/TeacherSee";
import ListAcademicBs from "./components/ListAcademicBs";
import FormAcademicB from "./components/FormAcademicB";
import AcademicBSee from "./components/AcademicBSee";
import FormAcademicBEdit from "./components/FormAcademicBEdit";
import FormProject from "./components/FormProject";
import ListProjects from "./components/ListProjects";
import FormProjectEdit from "./components/FormProjectEdit";
import ProjectSee from "./components/ProjectSee";
import Home from "./views/Home";
import Login from "./views/Login";
import tokenAuth from "./config/token";
import AuthState from "./context/auth/authState";
import RoutePrivate from "./routes/RoutePrivate";
import RoutePublic from "./routes/RoutePublic";
function App() {
    // Revisar si tenemos un token
    const token = localStorage.getItem("token");
    if (token) {
        tokenAuth(token);
    }
    return (
        <AuthState>
            <Router>
                <Switch>
                    {/* Rutas de maestros */}
                    <RoutePrivate
                        exact
                        path="/teachers"
                        component={ListTeachers}
                    />
                    <RoutePrivate
                        exact
                        path="/teacherformulario"
                        component={FormTeacher}
                    />
                    <RoutePrivate
                        exact
                        path="/teacheredit"
                        component={FormTeacherEdit}
                    />
                    <RoutePrivate
                        exact
                        path="/teachersee"
                        component={TeacherSee}
                    />
                    {/* Rutas de maestros */}
                    {/* Rutas de proyectos */}
                    <RoutePrivate
                        exact
                        path="/projectform"
                        component={FormProject}
                    />
                    <RoutePrivate
                        exact
                        path="/projects"
                        component={ListProjects}
                    />
                    <RoutePrivate
                        exact
                        path="/projectedit"
                        component={FormProjectEdit}
                    />
                    <RoutePrivate
                        exact
                        path="/projectsee"
                        component={ProjectSee}
                    />
                    {/* Rutas de proyectos */}
                    {/* Rutas de Cuerpos Académicos */}
                    <RoutePrivate
                        exact
                        path="/academicbs"
                        component={ListAcademicBs}
                    />
                    <RoutePrivate
                        exact
                        path="/academicbform"
                        component={FormAcademicB}
                    />
                    <RoutePrivate
                        exact
                        path="/academicbsee"
                        component={AcademicBSee}
                    />
                    <RoutePrivate
                        exact
                        path="/academicbedit"
                        component={FormAcademicBEdit}
                    />
                    <RoutePublic path="/login" component={Login} />
                    {/* Rutas de Cuerpos Académicos */}
                    <RoutePrivate path="/" component={Home} />
                </Switch>
            </Router>
        </AuthState>
    );
}

export default App;
