import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FormTeacher from "./components/FormTeacher";
import ListTeachers from "./components/ListTeachers";
import FormTeacherEdit from "./components/FormTeacherEdit";
import TeacherSee from "./components/TeacherSee";
import Templeate from './components/Templeate'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/teachers" component={ListTeachers} />
                <Route
                    exact
                    path="/teacherformulario"
                    component={FormTeacher}
                />
                <Route exact path="/teacheredit" component={FormTeacherEdit} />
                <Route exact path="/teachersee" component={TeacherSee} />
                <Route  path="/" component={Templeate} />
               
            </Switch>
        </Router>
    );
}

export default App;
