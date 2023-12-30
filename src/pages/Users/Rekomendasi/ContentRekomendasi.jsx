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
          <div class="flex items-center justify-between bg-gray-100 p-4">
            <div class="relative">
              <input
                type="text"
                class="border rounded-md py-2 px-4 w-64 focus:outline-none focus:border-blue-500"
                placeholder="Cari Wisata Alam ..."
              />
              <button class="absolute right-0 top-0 mt-3 mr-4">
                <i data-feather="search" class="text-gray-500"></i>
              </button>
            </div>
          </div>
          <div className="intro-y grid grid-cols-12 gap-6 mt-5">
            <Rekomendasi />

            {/* pagination */}
            <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center">
              <ul class="pagination">
                <li>
                  <a class="pagination__link" href="">
                    <i class="w-4 h-4" data-feather="chevrons-left"></i>
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    <i class="w-4 h-4" data-feather="chevron-left"></i>
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    ...
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    1
                  </a>
                </li>
                <li>
                  <a class="pagination__link pagination__link--active" href="">
                    2
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    3
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    ...
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    <i class="w-4 h-4" data-feather="chevron-right"></i>
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    <i class="w-4 h-4" data-feather="chevrons-right"></i>
                  </a>
                </li>
              </ul>
              <select class="w-20 input box mt-3 sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContentRekomendasi;
