import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button } from "antd";

import MicroFrontend from "./MicroFrontend";
import AppHeader from "./AppHeader";
import { Routes } from "./routeConfig";

import logo from "./logo.svg";
import "./App.css";

const AppCore = ({ history }) => <div>App Core</div>;

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={AppCore} />

          {Routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              render={({ history }) => (
                <MicroFrontend
                  history={history}
                  host={route.host}
                  name={route.name}
                />
              )}
            />
          ))}

          {/* <Route
            path="/dashboard"
            render={props => <Dashboard {...props} isAuthed={true} />}
          /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
