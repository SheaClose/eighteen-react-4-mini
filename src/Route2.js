import React, { Component } from "react";
//import './Route2.css';

class Route2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { pizza } = this.props.match.params;

    return (
      <div className="">
        <h1>Route2</h1>
      </div>
    );
  }
}
export default Route2;
