import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// components
import Layout from "./components/Layout/Index";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Other from "./components/Pages/Other";

const Routes = () => (
  <Switch>
    <Route exact path="/other" component={Other} />
    <Route exact path="/about" component={About} />
    <Route exact path="/home" component={Home} />
    <Redirect from="/" to="/home" component={Home} />
  </Switch>
);
export default () => (
  <Layout>
    <Routes />
  </Layout>
);