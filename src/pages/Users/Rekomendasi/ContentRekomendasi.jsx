import React, { Component, Fragment } from "react";
import "../../../assets/dist/css/app.css";
import Rekomendasi from "./Rekomendasi";
import SliderBanner from "../../../components/users/SliderBanner";

class ContentRekomendasi extends Component {
  render() {
    return (
      <Fragment>
        <div className="intro-y mt-5">
          <SliderBanner />
        </div>
        <div className="intro-y flex items-center justify-center mt-5 mb-10">
          <h2 className="text-lg font-bold">Rekomendasi Wisata Alam Lampung</h2>
        </div>
        <div className="intro-y grid grid-cols-12 gap-6 mt-5">
          <Rekomendasi />
        </div>
      </Fragment>
    );
  }
}

export default ContentRekomendasi;
