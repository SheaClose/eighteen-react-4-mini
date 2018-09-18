import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//import './Route3.css';

class Route3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <h1>Route 3</h1>
        <Switch>
          <Route path="/Route3/Student" render={() => <h2>Student </h2>} />
          <Route path="/Route3/Teacher" render={() => <h2>Teacher </h2>} />
        </Switch>
      </div>
    );
  }
}
export default Route3;
