import React, { Component, Fragment } from "react";
import "../../../assets/dist/css/app.css";
import feather from "feather-icons";

class Breadcrumb extends Component {
  componentDidMount() {
    feather.replace();
  }
  render() {
    return (
      <Fragment>
        <div className="-intro-x breadcrumb breadcrumb--light mr-auto">
          <a href="" className="">
            Application
          </a>
          <i data-feather="chevron-right" className="breadcrumb__icon"></i>
          <a href="" className="breadcrumb--active"></a>
        </div>
      </Fragment>
    );
  }
}

export default Breadcrumb;
