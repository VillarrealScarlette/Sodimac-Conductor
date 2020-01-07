import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

//Import views
import Login from './views/Login';
import Orders from './views/Orders';
import Main from './views/Main';
 
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Redirect
            exact
            from=""
            to="/Login" />
          <Switch>
            <Route
              path="/Login"
              component={Login} />
              <Route
              path="/Orders"
              component={Orders} />
              <Route
              path="/Main"
              component={Main} />
          </Switch>
        </React.Fragment>
      </Router>
  );
}
export default App;

