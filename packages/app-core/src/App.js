import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MicroFrontend from './MicroFrontend';
import AppHeader from './AppHeader';
import { Routes } from './routeConfig';

import './App.css';

const AppCore = ({ history }) => (
  <div>
    <Button type="primary">Button</Button>
  </div>
);

function App() {
  console.log('DDDDDDDDDDDDD');

  return (
    <BrowserRouter>
      <>
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
      </>
    </BrowserRouter>
  );
}

export default App;
