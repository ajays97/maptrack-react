import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";
import { history } from "./helpers/history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import DashboardPage from "./components/DashboardPage/DashboardPage";

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/" exact component={HomePage} />
            <PrivateRoute path="/dashboard" exact component={DashboardPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>

        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;
