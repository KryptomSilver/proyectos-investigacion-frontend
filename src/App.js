import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FormTeacher from "./components/FormTeacher";
import ListTeachers from "./components/ListTeachers";
import FormTeacherEdit from "./components/FormTeacherEdit";
import TeacherSee from "./components/TeacherSee";
import Templeate from './components/Templeate'
import FormProject from "./components/FormProject";
import ListProjects from "./components/ListProjects";
import FormProjectEdit from "./components/FormProjectEdit";
import ProjectSee from "./components/ProjectSee";


function App() {
    return (
        <Router>
            <Switch>
                {/* Rutas de maestros */}
                <Route exact path="/teachers" component={ListTeachers} />
                <Route
                    exact
                    path="/teacherformulario" 
                    component={FormTeacher}
                />
                <Route exact path="/teacheredit" component={FormTeacherEdit} />
                <Route exact path="/teachersee" component={TeacherSee} />
                {/* Rutas de maestros */}
                {/* Rutas de proyectos */}
                <Route exact path="/projectform" component={FormProject} />
                <Route exact path="/projects" component={ListProjects} />
                <Route exact path="/projectedit" component={FormProjectEdit} />
                <Route exact path="/projectsee" component={ProjectSee} />
                {/* Rutas de proyectos */}
                <Route  path="/" component={Templeate} />
               
            </Switch>
        </Router>
    );
}

export default App;
