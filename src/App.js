import React, { Component } from "react";
import MainMap from "./components/MainMap/MainMap";
import AppNav from "./components/AppNav/AppNav";
import './app.css';
import LoginPage from "./components/LoginPage/LoginPage";

class App extends Component {
  
  render() {
    return (
      <div>
        {/* <AppNav />











        <MainMap /> */}

        <LoginPage />
      </div>
    );
  }
}

export default App;
