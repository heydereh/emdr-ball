import React from 'react';
import './App.css';


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './components/home/Home';
import Appbar from './components/appbar/Appbar';
import {Admin} from './components/admin/Admin';
import {Session} from './components/session/Session';
import { SessionAdmin } from './components/session-admin/sessionAdmin';

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history} >
      <div >
        <div>
          <Appbar />
        </div>
        <div id="main-container">
          <Switch >
            <Route
              path="/"
              exact
              component={() => <Redirect to={"/home"} />}
            />
            <Route
              path="/home"
              exact
              component={() => <Home />}
            />
            <Route
              path="/admin"
              exact
              component={() => <Admin />}
            />
            <Route
              path="/admin/:sessionId"
              exact
              component={() => <SessionAdmin />}
            />
            <Route
              path="/:sessionId"
              exact
              component={() => <Session />}
            />

          </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
