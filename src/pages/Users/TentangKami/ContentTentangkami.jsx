import React, { Component, Fragment } from "react";
import "../../../assets/css/app.css";
import SliderBanner from "../../../components/SliderBanner";
import TentangKami from "../../../components/TentangKami";

class ContentTentangKami extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <h2 class="intro-y text-2xl font-medium mt-10 text-center mr-auto">
            Tentang Kami
          </h2>
          <TentangKami />
        </div>
      </Fragment>
    );
  }
}

export default ContentTentangKami;
