import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./container/SignIn";
import SignUp from "./container/SignUp";
import Home from "./container/Home";
import PrivateRoute from "./PrivateRoute";
import TodosForm from "./components/TodosForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/add/todos" component={TodosForm}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
