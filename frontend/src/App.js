import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import { CssBaseline } from "@material-ui/core/";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <CssBaseline />
        <Switch>
          <Route path="/">
            <Layout >
              <Dashboard />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
