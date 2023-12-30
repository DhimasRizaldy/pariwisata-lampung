import React, { Component, Fragment } from "react";
import "../../../assets/css/app.css";
import Rekomendasi from "./Rekomendasi";
import SliderBanner from "../../../components/SliderBanner";

class ContentRekomendasi extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="intro-y box mt-10">
            <SliderBanner />
          </div>
          <div className="intro-y flex items-center justify-center mt-10 mb-10">
            <h2 className="text-lg font-bold">
              Rekomendasi Wisata Alam Lampung
            </h2>
          </div>
          <div className="intro-y grid grid-cols-12 gap-6 mt-5">
            <Rekomendasi />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContentRekomendasi;
