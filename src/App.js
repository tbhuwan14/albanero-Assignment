import React from "react";
import CustomInputRow from "./CustomInputRow";
import Chart from "./Chart";
import Nav from "./Nav";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/customInputRow" exact component={CustomInputRow} />
        <Route path="/chart" exact component={Chart} />
      </Switch>
    </Router>
  );
}
