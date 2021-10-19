import "./App.module.scss";
import Nav from "./Components/Nav";
import Students from "./Containers/Students";
import Student from "./Containers/Student";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//React conditionally renders the page depending on file path
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/students/:id">
          <Student />
        </Route>
        <Route path="/students">
          {/*localhost:3000/students */}
          <Students />
        </Route>
        <Route path="/">
          {/*localhost:3000/about */}
          <h1>This is the Home page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//URL parameters (Things that can change but are handled
//the same way)
//students/:id
//Here we are telling React we want to handle this URL
//the same way regardless of what the id is
// /students/10 -> render a student page (with that change)
// /students/21 -> render a student page
