import React, { Component, Fragment } from "react";
import "../../../assets/css/app.css";
import Login from "../../../components/Login";

class ContentLogin extends Component {
  render() {
    return (
      <Fragment>
        <div className="login">
          <Login />
        </div>
      </Fragment>
    );
  }
}

export default ContentLogin;
