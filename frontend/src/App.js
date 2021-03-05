import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Landing from "./component/Layout/Landing";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Navbar from "./component/Layout/Navbar";
import Dashboard from "./component/dashboard";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch className="mt-5">
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
