import React, { Component } from "react";
import MainMap from "./components/MainMap/MainMap";
import AppNav from "./components/AppNav/AppNav";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./app.css";
import { history } from "./helpers/history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import SideNav from "./components/SideNav/SideNav";

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    history.listen((location, action) => {});
  }

  render() {
    return (
      <div>
        {/* <BrowserRouter>
          <Switch>
            <PrivateRoute path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>

        </BrowserRouter> */}
        <SideNav />
      </div>
    );
  }
}

export default App;
