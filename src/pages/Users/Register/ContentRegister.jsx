import React, { Component, Fragment } from "react";
import "../../../assets/css/app.css";
import Register from "../../../components/Register";

class ContentRegister extends Component {
  render() {
    return (
      <Fragment>
        <div className="login">
          <Register />
        </div>
      </Fragment>
    );
  }
}

export default ContentRegister;
