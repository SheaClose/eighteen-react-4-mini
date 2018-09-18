import React, { Component } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <NavLink exact to="/">
              Route1
            </NavLink>
            <NavLink to="/Route2">Route2</NavLink>
            <NavLink to="/Route3">Route3</NavLink>
          </header>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
