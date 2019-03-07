import React, { Component } from "react";
import MainMap from "./components/MainMap/MainMap";
import AppNav from "./components/AppNav/AppNav";
import './app.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <AppNav />











        <MainMap />
      </div>
    );
  }
}

export default App;
