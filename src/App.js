import React, { useState } from "react";
import "./App.css";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/home/Home";
import Appbar from "./components/appbar/Appbar";
import { Admin } from "./components/admin/Admin";
import { Session } from "./components/session/Session";
import { SessionAdmin } from "./components/session-admin/sessionAdmin";

const history = createBrowserHistory();

const App = () => {
  // BURADA location kullanilamiyor :)
  // const location = useLocation();
  const [cinemaMod, setCinemaMod] = useState(false);
  // const isAdmin = location.pathname.includes('admin')
  return (
    <Router history={history}>
      <div className="App">
    </div>
      <div
        className={`${cinemaMod ? "opacity-1" : "color-background"}`}
        style={{}}
      >
        <div>
          <Appbar cinemaMod={cinemaMod} toggleCinemaMod={setCinemaMod} />
        </div>
        <div id="main-container" >
          <Switch>
            <Route path="/" exact component={() => <Redirect to={"/home"} />} />
            <Route path="/home" exact component={() => <Home />} />
            <Route path="/admin" exact component={() => <Admin />} />
            <Route
              path="/admin/:sessionId"
              exact
              component={() => <SessionAdmin />}
            />
            <Route
              path="/:sessionId"
              exact
              component={() => (
                <Session cinemaMod={cinemaMod} toggleCinemaMod={setCinemaMod} />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
