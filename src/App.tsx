import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "@/screens/LoginScreen";
import { FieldScreen } from "@/screens/FieldScreen";
import { NoMatchScreen } from "@/screens/NoMatchScreen";
import { UserScreen } from "@/screens/UserScreen";
import { FormScreen } from "@/screens/FormScreen";

export const App: React.FC<{}> = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/field">Field</Link>
        </li>
        <li>
          <Link to="/user/Nick">Nick</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/field" render={() => <FieldScreen />} />
      <Route path="/user/:name" component={UserScreen} />
      <Route path="/form" component={FormScreen} />
      <Route path="*">
        <NoMatchScreen />
      </Route>
    </Switch>
  </Router>
);
