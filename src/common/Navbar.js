import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid px-0">

        <div className="bg-secondary p-2">
          <div className="container">
            <h4 className="text-light d-inline-block mr-3 my-0">Logo</h4>
            <Link to="/" className="btn btn-secondary text-light h6 mx-3 mt-2">
              Home
            </Link>
            <Link to="/task" className="btn btn-secondary text-light h6 mx-3 mt-2">
              Task
            </Link>
            <Link to="/user" className="btn btn-secondary text-light h6 mx-3 mt-2">
              User
            </Link>
          </div>
        </div>

        <div className="container pt-3">{this.props.children}</div>
      </div>
    );
  }
}
