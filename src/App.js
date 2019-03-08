import React, { Component } from "react";
import MainMap from "./components/MainMap/MainMap";
import AppNav from "./components/AppNav/AppNav";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './app.css';
import LoginPage from "./components/LoginPage/LoginPage";

class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={props =>
              <div>
                <AppNav />
                <MainMap />
              </div>
             } />
            <Route path="/login" component={LoginPage} />
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
